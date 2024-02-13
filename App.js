// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login'; // Supondo que o componente Login esteja em um arquivo separado
import Principal from './src/screens/Principal'; // Supondo que a tela principal esteja em um arquivo separado
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Principal" component={Principal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
