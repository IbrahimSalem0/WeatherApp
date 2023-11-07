import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';

const API_KEY = 'dcc282465705441a99394513230211';
const BASE_URL = 'http://api.weatherapi.com/v1/search.json';

const CitySearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const fetchCitySuggestions = async (input) => {
    if (!input) {
      setResults([]);
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${input}`);
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error('Error fetching city suggestions:', error);
    }
  };

  useEffect(() => {
    fetchCitySuggestions(query);
  }, [query]);

  const handleCitySelect = (city) => {
    console.log('Selected city:', city);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter a city name"
        value={query}
        onChangeText={setQuery}
      />
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCitySelect(item)}>
            <Text>{item.name}, {item.region}, {item.country}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CitySearch;
