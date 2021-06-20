import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import DefaultText from '../components/DefaultText';

const FavoriteScreen = ({ navigation }) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorite meals found.</DefaultText>
        <DefaultText>Start adding some!</DefaultText>
      </View>
    );
  }

  return <MealList navigation={navigation} listData={favMeals} />;
};

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default FavoriteScreen;
