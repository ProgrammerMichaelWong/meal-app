import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import Colors from '../constants/Colors';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

const CategoryMealsScreen = ({ route, navigation }) => {
  const { categoryId: catId } = route.params;

  //set title
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  navigation.setOptions({
    title: selectedCategory.title,
  });

  //select meals
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found!</DefaultText>
        <DefaultText>Please check your filters!</DefaultText>
      </View>
    );
  }

  return <MealList navigation={navigation} listData={displayedMeals} />;
};

const styles = StyleSheet.create({
  content: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

export default CategoryMealsScreen;
