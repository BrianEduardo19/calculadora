import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/Home';
import { 
  CalculatorScreen, 
  HistoryScreen, 
  SettingsScreen 
} from '../screens/Calculator';
import { screens } from '../utils';

const Stack = createNativeStackNavigator();

export function AppNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={screens.home.homeScreen}
        component={HomeScreen}
      />
      <Stack.Screen
        name={screens.calculator.calculatorScreen}
        component={CalculatorScreen}
      />
      <Stack.Screen
        name={screens.calculator.historyScreen}
        component={HistoryScreen}
      />
      <Stack.Screen
        name={screens.calculator.settingsScreen}
        component={SettingsScreen}
      />
    </Stack.Navigator>
  );
}