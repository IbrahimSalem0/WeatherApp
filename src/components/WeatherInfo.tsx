import React from 'react';
import { View, Text, Image } from 'react-native';

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
    <View>
      <Text>{`${city}, ${country}`}</Text>
      <Text>{conditionText}</Text>
      <Image source={{ uri: conditionIcon }} />
      <Text>{forecast}</Text>
    </View>
  );
};

export default WeatherInfo;
