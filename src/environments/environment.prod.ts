export const environment = {
  production: true,
  weather: {
    baseURL: 'https://api.open-meteo.com/v1/forecast?latitude=49.3697&longitude=0.8711&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FChicago'
  },
  cards: {
    baseURL: 'https://deckofcardsapi.com/api/deck/'
  }
};
