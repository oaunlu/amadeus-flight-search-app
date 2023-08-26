class Api {
  private airports = [
    "Ankara Esenboğa Havalimanı(ESB)",
    "İstanbul Atatürk Havalimanı(ISL)",
    "İstanbul Havalimanı(IST)",
    "İstanbul Sabiha Gökçen Havalimanı(SAW)",
    "İzmir Adnan Menderes Havalimanı(ADB)"
  ]

  private existingFlights = [
    { departure: this.airports[0], destination: this.airports[2], date: "", airline: "thy" },
    { departure: this.airports[2], destination: this.airports[0], date: "", airline: "thy" },
  ]

  getAirportList() {
    return this.airports;
  }

  getFlights(departure, destination, date) {
    return this.existingFlights.filter(flight => {
      return flight.departure === departure && flight.destination === destination && flight.date === date;
    });
  }
}

const api = new Api();
export default api;