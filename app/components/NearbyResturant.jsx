import { FlatList, StyleSheet, Text, View } from 'react-native';
import uidata from '../constants/uidata';
import StoreComponent from './StoreComponent';

const NearByRestaurants = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={uidata.restaurants}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        scrollEnabled
        renderItem={({ item }) => (
          <StoreComponent item={item} onPress={() =>{}}/>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 12,
    marginTop: 10,
  },
  list: {
    marginTop: 5,
    rowGap: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    marginHorizontal: 5,
  },
});

export default NearByRestaurants;
