<template>
  <v-container>
    <v-row justify="space-between" align-content="center" class="d-flex flex-nowrap">
      <v-col cols="4">
        <v-autocomplete
          density="comfortable"
          auto-select-first
          hide-no-data
          hide-details
          item-props
          clearable
          chips
          variant="underlined"
          label="Kalkış"
          v-model="departureAirport"
          :items="airportList"
        ></v-autocomplete>
      </v-col>
      <v-col cols="4">
        <v-autocomplete
          density="comfortable"
          auto-select-first
          hide-no-data
          hide-details
          item-props
          clearable
          chips
          variant="underlined"
          label="Varış"
          v-model="destinationAirport"
          :items="airportList"
        ></v-autocomplete>
      </v-col>
      <v-col cols="3">
        <v-text-field
          type="datetime-local"
          density="comfortable"
          variant="underlined"
          theme="dark"
          label="Kalkış"
          v-model="departureDate"
        ></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field
          type="datetime-local"
          density="comfortable"
          variant="underlined"
          theme="dark"
          label="Dönüş"
          v-model="returnDate"
          :disabled="searchStore.isOneWayFlight"
        ></v-text-field>
      </v-col>
      <v-col cols="2" class="pt-5 pr-0 mr-0 d-flex flex-column align-center justify-center">
        <v-checkbox
          density="compact"
          class="pb-0 mb-0 pr-0 mr-0"
          v-model="searchStore.isOneWayFlight"
        >
          <template v-slot:label> Tek yön </template>
        </v-checkbox>
      </v-col>
      <v-col cols="1" class="pt-5">
        <v-btn size="x-large" density="compact" theme="dark" @click="search">Ara</v-btn>
      </v-col>
    </v-row>
    <v-alert
      text="Please make a selection"
      :type="alertType"
      variant="tonal"
      width="1150"
    ></v-alert>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted, type Ref, ref, computed } from 'vue'

import { useSearchStore } from '@/stores/search'

export default defineComponent({
  setup() {
    const searchStore = useSearchStore()

    const airportList: Ref<any[] | undefined> = ref()

    onMounted(() => {
      airportList.value = searchStore.airportList
    })

    const departureAirport: Ref<string | undefined> = ref()
    const destinationAirport: Ref<string | undefined> = ref()
    const departureDate: Ref<string | undefined> = ref()
    const returnDate: Ref<string | undefined> = ref()

    const alertType = computed(() => (isEmptyInput ? 'warning' : 'info'))

    const isEmptyInput = computed(() => {
      return (
        !departureAirport.value ||
        !destinationAirport.value ||
        !departureDate.value ||
        (!searchStore.isOneWayFlight && !returnDate.value)
      )
    })

    return {
      searchStore,
      airportList,
      departureAirport,
      destinationAirport,
      departureDate,
      returnDate,
      alertType
    }
  },
  methods: {
    search() {
      const flightDetails = {
        departureAirport: this.departureAirport,
        destinationAirport: this.destinationAirport,
        departureDate: this.departureDate,
        returnDate: this.returnDate
      }
      this.searchStore.search(flightDetails)
    }
  }
})
</script>
