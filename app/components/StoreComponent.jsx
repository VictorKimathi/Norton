import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import NetworkImage from './NetworkImage';
import {RatingInput} from 'react-native-stock-star-rating'
const StoreComponent = ({ item, onPress }) => {
  // console.log(item.imageUrl)
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <NetworkImage data={item.imageUrl} height={SIZES.width - 80} width={SIZES.height / 5.8} mode={'cover'} radius={16} />
      <Text styles={styles.heading}>{item.title}</Text>
      <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
        <Text style={styles.small}>Deliver under</Text>
        <Text style={styles.time}>Deliver under</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
     <RatingInput     
      rating={item.rating}
      size={14}
      maxStars={5}
      bordered={false}
      color={COLORS.primary}
      

     
     />
      </View> 
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginRight: 15,
    backgroundColor: COLORS.lightWhite,
    padding: 8,
    borderRadius: 16,
  },

});

export default StoreComponent;
