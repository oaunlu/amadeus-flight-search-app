<template>
  <v-row v-if="searchStore.isLoading">
    <img src="../../public/loading.gif" alt="loading" class="center" />
  </v-row>
  <v-row v-else-if="searchStore.isLoaded">
    <v-col :cols="searchStore.isOneWayFlight ? '12' : 6">
      <v-row>
        <v-col>
          <v-select
            label="Select"
            :items="sortArray"
            variant="solo-filled"
            density="compact"
            theme="dark"
          ></v-select>
        </v-col>
        <v-col>
          <v-btn size="x-large" density="comfortable" theme="dark">Sırala</v-btn>
        </v-col>
      </v-row>
      <v-card v-if="searchStore.outgoingFlights?.length" theme="dark">
        Gidiş için {{ searchStore.outgoingFlights.length }} tane uçuş bulundu
        <template v-for="flight in searchStore.outgoingFlights" :key="flight.name">
          <search-list-item
            :departureAirport="flight.departureAirport"
            :destinationAirport="flight.destinationAirport"
            :date="flight.date"
            :time="flight.time"
            :duration="flight.duration"
            :airline="flight.airline"
            :price="flight.price"
          ></search-list-item>
        </template>
        <template>
          <v-data-table
            :headers="headers"
            :items="searchStore.outgoingFlights"
            class="elevation-1"
          ></v-data-table>
        </template>
      </v-card>
      <v-card v-else> Veri Bulunamadı </v-card>
    </v-col>
    <v-col cols="6" v-if="!searchStore.isOneWayFlight">
      <v-row>
        <v-col>
          <v-select
            label="Select"
            :items="sortArray"
            variant="solo-filled"
            density="compact"
            theme="dark"
          ></v-select>
        </v-col>
        <v-col>
          <v-btn size="x-large" density="comfortable" theme="dark">Sırala</v-btn>
        </v-col>
      </v-row>
      <v-card v-if="searchStore.incomingFlights?.length" theme="dark">
        Dönüş için {{ searchStore.incomingFlights.length }} tane uçuş bulundu
        <template v-for="flight in searchStore.incomingFlights" :key="flight.name">
          <search-list-item
            :departureAirport="flight.departureAirport"
            :destinationAirport="flight.destinationAirport"
            :date="flight.date"
            :time="flight.time"
            :duration="flight.duration"
            :airline="flight.airline"
            :price="flight.price"
          ></search-list-item>
        </template>
      </v-card>
      <v-card v-else theme="dark"> Veri Bulunamadı </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useSearchStore } from '@/stores/search'
import SearchListItem from '@/components/SearchListItem.vue'

export default defineComponent({
  components: { SearchListItem },
  setup() {
    const searchStore = useSearchStore()

    const sortArray = ['Fiyat', 'Kalkış Saati', 'Uçuş Süresi']
    const headers = ['Uçuş ismi', ...sortArray, 'Havayolu']

    return {
      searchStore,
      sortArray,
      headers
    }
  }
})
</script>

<style scoped>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>