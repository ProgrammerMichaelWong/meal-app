import React from 'react';
import {
  FlatList,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { CATEGORIES } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = ({ item }) => {
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onSelect={() =>
          navigation.navigate('CategoryMeals', {
            categoryId: item.id,
          })
        }
      />
    );
  };

  navigation.setOptions({
    title: 'Meal Categories',
    headerLeft: () => {
      return (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Menu"
            iconName="ios-menu"
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      );
    },
  });

  return (
    <FlatList
      numColumns={2}
      renderItem={renderGridItem}
      keyExtractor={(item) => {
        item.id;
      }}
      data={CATEGORIES}
    />
  );
};

export default CategoriesScreen;
