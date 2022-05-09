import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BadCharactersScreen from '../screens/BadCharacters';
import BadCharactersDetailsScreen from '../screens/BadCharacterDetails';
import colors from '../constants/colors';

enableScreens();
const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: colors.Black,
          headerStyle: {backgroundColor: colors.White},
        }}>
        <Stack.Screen
          name="BadCharacters"
          component={BadCharactersScreen}
          options={{
            headerTitle: 'Bad Characters',
          }}
        />
        <Stack.Screen
          name="BadCharactersDetails"
          component={BadCharactersDetailsScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
