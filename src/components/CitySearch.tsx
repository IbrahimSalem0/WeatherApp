import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';


const CitySearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const fetchCitySuggestions = async (input) => {
    if (!input) {
      setResults([]);
      return;
    }


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
