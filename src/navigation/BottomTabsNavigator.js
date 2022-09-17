import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from '../screens/Home';

import {useTheme} from 'react-native-paper';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  const {colors} = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: colors.accent,
        headerShown: false,
      }}
      // activeColor={colors.primary}
      barStyle={{backgroundColor: colors.surface}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="settings"
        component={Settings}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="more-horiz" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
