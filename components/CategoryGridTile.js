import React from 'react';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Platform,
} from 'react-native';

const CategoryGridTile = (props) => {
  let TouchableComponent = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.gridItem}>
      <TouchableComponent
        onPress={props.onSelect}
        style={styles.TouchableComponent}>
        <View style={{ ...styles.container, backgroundColor: props.color }}>
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow:
      Platform.OS === 'android' && Platform.Version >= 21
        ? 'hidden'
        : 'visible',
    elevation: 10,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 5,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 15,
    textAlign: 'right',
  },
  TouchableComponent: { flex: 1 },
});

export default CategoryGridTile;
