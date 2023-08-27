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
          type="date"
          density="comfortable"
          variant="underlined"
          theme="dark"
          label="Kalkış"
          v-model="departureDate"
        ></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field
          type="date"
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
      v-if="isEmptyInput"
      text="Please make a selection"
      type="warning"
      variant="tonal"
      width="1150"
    ></v-alert>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted, type Ref, ref } from 'vue'

import { useSearchStore } from '@/stores/search'

export default defineComponent({
  setup() {
    const searchStore = useSearchStore()

    const airportList: Ref<any[] | undefined> = ref()

    onMounted(async () => {
      airportList.value = await searchStore.airportList
    })

    const departureAirport: Ref<string | undefined> = ref('Antalya Havalimanı(AYT)')
    const destinationAirport: Ref<string | undefined> = ref('Samsun Çarşamba Havalimanı(SZF)')
    const departureDate: Ref<string | undefined> = ref('2023-08-28')
    const returnDate: Ref<string | undefined> = ref('2023-08-29')

    const isEmptyInput = ref(false)

    return {
      searchStore,
      airportList,
      departureAirport,
      destinationAirport,
      departureDate,
      returnDate,
      isEmptyInput
    }
  },
  methods: {
    search() {
      if (this.checkInput()) return
      const flightDetails = {
        departureAirport: this.departureAirport,
        destinationAirport: this.destinationAirport,
        departureDate: this.departureDate,
        returnDate: this.returnDate
      } as {
        departureAirport: string
        destinationAirport: string
        departureDate: string
        returnDate: string
      }
      this.searchStore.search(flightDetails)
    },
    checkInput() {
      if (
        !this.departureAirport ||
        !this.destinationAirport ||
        !this.departureDate ||
        (!this.searchStore.isOneWayFlight && !this.returnDate)
      ) {
        this.isEmptyInput = true
      } else {
        this.isEmptyInput = false
      }
      return this.isEmptyInput
    }
  }
})
</script>
