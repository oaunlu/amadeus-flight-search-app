import { type Ref, ref, computed } from 'vue'
import { defineStore } from 'pinia'
import Api from '@/api/api'

export const useSearchStore = defineStore('search', () => {
  const airportList = computed(() => Api.getAirportList());

  const isOneWayFlight: Ref<boolean> = ref(false)

  const outgoingFlights: Ref<any[] | undefined> = ref()
  const incomingFlights: Ref<any[] | undefined> = ref()

  const search = (flightDetails) => {
    console.log("search started...");
    console.table(flightDetails);

    const { departureAirport, arrivalAirport, departureDate, returnDate } = flightDetails

    this.outgoingFlights.value = Api.getFlights(departureAirport, arrivalAirport, departureDate)
    if (returnDate) {
      this.incomingFlights.value = Api.getFlights(arrivalAirport, departureAirport, returnDate)
    }
  }

  return { airportList, isOneWayFlight, search, outgoingFlights, incomingFlights }
})
