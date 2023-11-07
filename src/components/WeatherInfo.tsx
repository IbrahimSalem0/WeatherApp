import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type WeatherInfoProps = {
  city: string;
  country: string;
  conditionText: string;
  conditionIcon: string;
  forecast: string;
};

const WeatherInfo: React.FC<WeatherInfoProps> = ({
  city,
  country,
  conditionText,
  conditionIcon,
  forecast,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.locationText}>{`${city}, ${country}`}</Text>
      <Text style={styles.conditionText}>{conditionText}</Text>
      <Image source={{ uri: conditionIcon }} style={styles.conditionIcon} />
      <Text style={styles.forecastText}>{forecast}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  locationText: {
    fontSize: 20,
  },
  conditionText: {
    fontSize: 16,
  marginBottom: 10,
  },
  conditionIcon: {
    width: 64,
    height: 64,
  },
  forecastText: {
    fontSize: 16,
  },
});

export default WeatherInfo;
