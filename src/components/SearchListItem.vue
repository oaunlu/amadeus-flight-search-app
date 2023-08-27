<template>
  <v-card theme="dark">
    <v-title> Uçuş Bilgisi </v-title>
    {{ props.departureAirport }}
    {{ props.date }}
    {{ props.time }}
    {{ props.duration }}
    {{ props.airline.name }}
    {{ props.price }}
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    departureAirport: String,
    destinationAirport: String,
    date: String,
    time: String,
    duration: String,
    airline: {
      name: String,
      code: String,
      icon: String
    },
    price: String
  },
  setup(props) {
    return {
      props
    }
  }
})
</script>
