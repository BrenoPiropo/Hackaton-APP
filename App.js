// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login'; // Supondo que o componente Login esteja em um arquivo separado
import Principal from './src/screens/Principal'; // Supondo que a tela principal esteja em um arquivo separado
import Technology from './src/categories/Technology/Technology'; // Importando a tela de Technology
import Drinks from './src/categories/Drinks/Drinks'; // Importando a tela de Drinks
import Pharmaco from './src/categories/Pharmaco/Pharmaco'; // Importando a tela de Technology
import Automobile from './src/categories/Automobile/Automobile'; // Importando a tela de Technology
import Food from './src/categories/Food/Food'; // Importando a tela de Technology
import Fashion from './src/categories/Fashion/Fashion'; // Importando a tela de Technology

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Principal" component={Principal} />
        <Stack.Screen name="Technology" component={Technology} /> 
        <Stack.Screen name="Drinks" component={Drinks} /> 
        <Stack.Screen name="Pharmaco" component={Pharmaco} /> 
        <Stack.Screen name="Automobile" component={Automobile} /> 
        <Stack.Screen name="Food" component={Food} /> 
        <Stack.Screen name="Fashion" component={Fashion} /> 

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
