import React from 'react';
import EventList from './EventList';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import EventForm from './EventForm';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Your Events" component={EventList} />
        <Stack.Screen name="Add" component={EventForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
