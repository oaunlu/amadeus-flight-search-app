import { type Ref, ref, computed } from 'vue'
import { defineStore } from 'pinia'
import Api from '@/api/api'

export const useSearchStore = defineStore('search', () => {
  const airportList = computed(async () => await Api.getAirportList()
    .then(response => response)
    .catch(error => {
      console.error(error)
      return []
    }));

  const isOneWayFlight: Ref<boolean> = ref(false);

  const outgoingFlights: Ref<any[] | undefined> = ref();
  const incomingFlights: Ref<any[] | undefined> = ref();

  const isLoading: Ref<boolean> = ref(false);
  const isLoaded: Ref<boolean> = ref(false);

  const search = async (flightDetails: { departureAirport: string, destinationAirport: string, departureDate: string, returnDate: string }) => {
    isLoading.value = true;
    console.log("search started...");
    if (isLoading.value) console.log("loading...");
    console.table(flightDetails);

    const { departureAirport, destinationAirport, departureDate, returnDate } = flightDetails;

    outgoingFlights.value = await Api.getFlights(departureAirport, destinationAirport, departureDate)
      .then(response => response)
      .catch(error => {
        console.error(error)
        return []
      });
    if (returnDate) {
      incomingFlights.value = await Api.getFlights(destinationAirport, departureAirport, returnDate)
        .then(response => response)
        .catch(error => {
          console.error(error)
          return []
        });
    }
    console.table(outgoingFlights);
    isLoading.value = false;
    isLoaded.value = true;
  }

  return { airportList, isOneWayFlight, isLoading, isLoaded, search, outgoingFlights, incomingFlights }
})
