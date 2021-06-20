import * as React from 'react';
import { View, Text, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import Colors from '../constants/Colors';

const Stack = createStackNavigator();
const Tab =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerTitleStyle: { fontFamily: 'open-sans-bold' },
  headerBackTitleStyle: { fontFamily: 'open-sans' },
};

const MealsNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      headerMode="screen"
      screenOptions={defaultStackNavOptions}>
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

const FavNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Categories"
      headerMode="screen"
      screenOptions={{ ...defaultStackNavOptions, title: 'Your Favorites' }}>
      <Stack.Screen name="Favourites" component={FavoritesScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

const FiltersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Filter"
      headerMode="screen"
      screenOptions={defaultStackNavOptions}>
      <Stack.Screen name="Filter" component={FiltersScreen} />
    </Stack.Navigator>
  );
};

const MealsFavTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Meals"
      //for IOS:
      tabBarOptions={{
        activeTintColor: Colors.accentColor,
        labelStyle: { fontFamily: 'open-sans' },
      }}
      //for Android:
      activeColor="white"
      shifting={true}>
      <Tab.Screen
        name="Meals"
        component={MealsNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-restaurant" size={25} color={color} />
          ),
          tabBarLabel:
            Platform.OS === 'android' ? (
              <Text style={{ fontFamily: 'open-sans-bold' }}>Meals</Text>
            ) : (
              'Meals'
            ),
          //for Android:
          tabBarColor: Colors.primaryColor,
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={FavNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-star" size={25} color={color} />
          ),
          tabBarLabel:
            Platform.OS === 'android' ? (
              <Text style={{ fontFamily: 'open-sans-bold' }}>Favourites</Text>
            ) : (
              'Favourites'
            ),
          //for Android:
          tabBarColor: Colors.accentColor,
        }}
      />
    </Tab.Navigator>
  );
};

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="MealsFav"
        drawerContentOptions={{
          activeTintColor: Colors.accentColor,
          labelStyle: { fontFamily: 'open-sans-bold' },
        }}>
        <Drawer.Screen
          name="MealsFav"
          component={MealsFavTabNavigator}
          options={{ drawerLabel: 'Meals' }}
        />
        <Drawer.Screen
          name="Filters"
          component={FiltersNavigator}
          options={{ drawerLabel: 'Filters!!!' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
