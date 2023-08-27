class Api {
  private airports = [
    "Ankara Esenboğa Havalimanı(ESB)",
    "Antalya Havalimanı(AYT)",
    "Çanakkale Havalimanı(CKZ)",
    "İstanbul Atatürk Havalimanı(ISL)",
    "İstanbul Havalimanı(IST)",
    "İstanbul Sabiha Gökçen Havalimanı(SAW)",
    "İzmir Adnan Menderes Havalimanı(ADB)",
    "Ordu-Giresun Havalimanı(OGU)",
    "Samsun Çarşamba Havalimanı(SZF)"
  ]

  private airlines = [
    { name: "Türk Hava Yolları", code: "TK", icon: "" },
    { name: "Anadolu Jet", code: "AJ", icon: "" },
    { name: "Pegasus", code: "PC", icon: "" },
  ]

  private existingFlights = [
    { name: "TK-111", departure: this.airports[0], destination: this.airports[4], date: "2023-08-28", time: "10.00", duration: "1.00", airline: this.airlines[0], price: "10" },
    { name: "TK-111", departure: this.airports[0], destination: this.airports[4], date: "2023-08-28", time: "11.00", duration: "1.00", airline: this.airlines[1], price: "20" },
    { name: "TK-111", departure: this.airports[0], destination: this.airports[4], date: "2023-08-28", time: "12.00", duration: "1.00", airline: this.airlines[2], price: "30" },
    { name: "TK-111", departure: this.airports[4], destination: this.airports[0], date: "2023-08-29", time: "10.00", duration: "1.00", airline: this.airlines[0], price: "10" },
    { name: "TK-111", departure: this.airports[4], destination: this.airports[0], date: "2023-08-29", time: "11.00", duration: "1.00", airline: this.airlines[1], price: "20" },
    { name: "TK-111", departure: this.airports[4], destination: this.airports[0], date: "2023-08-29", time: "12.00", duration: "1.00", airline: this.airlines[2], price: "30" },

    { name: "TK-111", departure: this.airports[1], destination: this.airports[8], date: "2023-08-28", time: "10.00", duration: "1.35", airline: this.airlines[0], price: "10" },
    { name: "TK-111", departure: this.airports[1], destination: this.airports[8], date: "2023-08-28", time: "11.00", duration: "1.35", airline: this.airlines[1], price: "20" },
    { name: "TK-111", departure: this.airports[1], destination: this.airports[8], date: "2023-08-28", time: "12.00", duration: "1.35", airline: this.airlines[2], price: "30" },
    { name: "TK-111", departure: this.airports[8], destination: this.airports[1], date: "2023-08-29", time: "10.00", duration: "1.35", airline: this.airlines[0], price: "10" },
    { name: "TK-111", departure: this.airports[8], destination: this.airports[1], date: "2023-08-29", time: "11.00", duration: "1.35", airline: this.airlines[1], price: "20" },
    { name: "TK-111", departure: this.airports[8], destination: this.airports[1], date: "2023-08-29", time: "12.00", duration: "1.35", airline: this.airlines[2], price: "30" },

    { name: "TK-111", departure: this.airports[2], destination: this.airports[0], date: "2023-08-28", time: "10.00", duration: "1.15", airline: this.airlines[0], price: "10" },
    { name: "TK-111", departure: this.airports[2], destination: this.airports[0], date: "2023-08-28", time: "11.00", duration: "1.15", airline: this.airlines[1], price: "20" },
    { name: "TK-111", departure: this.airports[2], destination: this.airports[0], date: "2023-08-28", time: "12.00", duration: "1.15", airline: this.airlines[2], price: "30" },
    { name: "TK-111", departure: this.airports[0], destination: this.airports[2], date: "2023-08-29", time: "10.00", duration: "1.15", airline: this.airlines[0], price: "10" },
    { name: "TK-111", departure: this.airports[0], destination: this.airports[2], date: "2023-08-29", time: "11.00", duration: "1.15", airline: this.airlines[1], price: "20" },
    { name: "TK-111", departure: this.airports[0], destination: this.airports[2], date: "2023-08-29", time: "12.00", duration: "1.15", airline: this.airlines[2], price: "30" },

    { name: "TK-111", departure: this.airports[5], destination: this.airports[6], date: "2023-08-28", time: "10.00", duration: "1.10", airline: this.airlines[0], price: "10" },
    { name: "TK-111", departure: this.airports[5], destination: this.airports[6], date: "2023-08-28", time: "11.00", duration: "1.10", airline: this.airlines[1], price: "20" },
    { name: "TK-111", departure: this.airports[5], destination: this.airports[6], date: "2023-08-28", time: "12.00", duration: "1.10", airline: this.airlines[2], price: "30" },
    { name: "TK-111", departure: this.airports[6], destination: this.airports[5], date: "2023-08-29", time: "10.00", duration: "1.10", airline: this.airlines[0], price: "10" },
    { name: "TK-111", departure: this.airports[6], destination: this.airports[5], date: "2023-08-29", time: "11.00", duration: "1.10", airline: this.airlines[1], price: "20" },
    { name: "TK-111", departure: this.airports[6], destination: this.airports[5], date: "2023-08-29", time: "12.00", duration: "1.10", airline: this.airlines[2], price: "30" },
  ]

  getAirportList(): Promise<any[]> {
    return Promise.resolve(this.airports);
  }

  getFlights(departure: string, destination: string, date: string): Promise<any[]> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(this.existingFlights.filter(flight => {
          return flight.departure === departure && flight.destination === destination && flight.date === date;
        }));
      }, 2000);
    })
  }
}

const api = new Api();
export default api;