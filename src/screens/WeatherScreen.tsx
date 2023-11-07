import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useWeatherQuery } from "../hooks/useWeatherQuery";
import WeatherInfo from "../components/WeatherInfo";
import CitySearch from "../components/CitySearch";

const WeatherScreen = () => {
  const [city, setCity] = useState('');
  const { data, isLoading, isError } = useWeatherQuery(city);

  return (
    <View>
      <Text>Enter City:</Text>
      <CitySearch />
      <TextInput value={city} onChangeText={(text) => setCity(text)} />
      <Button title="Get Weather" onPress={() => setCity(city)} />
      {isLoading && <Text>Loading...</Text>}
      {isError && <Text>Error fetching weather data</Text>}
      {data && <WeatherInfo data={data} />}
    </View>
  );
};

export default WeatherScreen;
