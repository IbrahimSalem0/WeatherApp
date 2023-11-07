import { useQuery } from 'react-query';
import axios from 'axios';

const API_KEY = 'dcc282465705441a99394513230211'; 
const BASE_URL = 'http://api.weatherapi.com/v1/current.json';

const fetchWeatherData =  (city: string) => {
    const response =  axios.get('https://api.weatherapi.com/v1/current.json?key=dcc282465705441a99394513230211&q=Cairo&aqi=no');
    console.log("RW", response);
  return response;

};

export const useWeatherQuery = (city: string) => {
  return useQuery(['weather', city], () => fetchWeatherData(city));
};
