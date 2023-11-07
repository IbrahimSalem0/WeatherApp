import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WeatherScreen from './src/screens/WeatherScreen';
import { QueryClient, QueryClientProvider } from 'react-query';

const Stack = createStackNavigator();

const queryClient = new QueryClient(); 

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="WeatherScreen">
          <Stack.Screen name="WeatherScreen" component={WeatherScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
