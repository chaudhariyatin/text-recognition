import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Details from '../screens/Details';
import BottomTabsNavigator from './BottomTabsNavigator';

const MainNavigation = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        options={{headerShown: false}}
        component={BottomTabsNavigator}
      />
      <Stack.Screen
        name="Details"
        options={
          {
            //   headerShown: false,
          }
        }
        component={Details}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
