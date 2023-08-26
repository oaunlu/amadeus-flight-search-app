<template>
  <v-row>
    <v-col :cols="searchStore.isOneWayFlight ? '12' : 6">
      <v-card v-if="searchStore.outgoingFlights">
        Gidiş
        <template v-for="flight in searchStore.outgoingFlights">
          <search-list-item></search-list-item>
        </template>
      </v-card>
    </v-col>
    <v-col cols="6" v-if="!searchStore.isOneWayFlight">
      <v-card v-if="searchStore.incomingFlights">
        Gidiş
        <template v-for="flight in searchStore.incomingFlights">
          <search-list-item></search-list-item>
        </template>
      </v-card>
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

    return {
      searchStore
    }
  }
})
</script>
