import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { AntDesign, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

import { Home } from './pages/Home';
import { Search } from './pages/Search';
import { Reels } from './pages/Reels';
import { Shop } from './pages/Shop';
import { Profile } from './pages/Profile';

export function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#e1e1e1"
        inactiveColor="#e1e1e1"
        labelStyle={{ fontSize: 12 }}
        labeled={false}
        barStyle={{ backgroundColor: '#121212' }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
              return <Ionicons name={iconName} color={color} size={26} />
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
              return <Ionicons name={iconName} color={color} size={26} />
            } else if (route.name === 'Reels') {
              iconName = focused ? 'play-circle' : 'play-circle-outline';
              return <Ionicons name={iconName} color={color} size={26} />
            } else if (route.name === 'Shop') {
              iconName = focused ? 'shopping' : 'shopping-outline';
              return <MaterialCommunityIcons name={iconName} color={color} size={26} />
            } else if (route.name === 'Profile') {
              iconName = focused ? 'user' : 'user-o';
              return <FontAwesome name={iconName} color={color} size={26} />
            }
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={Home}
        />
        <Tab.Screen
          name="Search"
          component={Search}
        />
        <Tab.Screen
          name="Reels"
          component={Reels}
        />
        <Tab.Screen
          name="Shop"
          component={Shop}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}