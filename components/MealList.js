import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from '../components/MealItem';

const MealList = ({navigation,listData}) => {
  const renderMealItem = ({ item }) => {
    return (
      <MealItem
        title={item.title}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        image={item.imageUrl}
        onSelectMeal={() => {
          navigation.navigate('MealDetail', { mealId: item.id });
        }}
      />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        data={listData}
        keyExtractor={(item) => {
          item.id;
        }}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealList;
