import { View, Text, StyleSheet } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import AssetImage from './AssetImage';
import { UserReversedGeoCode } from '../context/UserReversedGeoCode';
import { COLORS, SIZES } from '../constants/theme';
import { UserLocationContext } from '../context/UserLocationContext';
import * as Location from 'expo-location';

const HomeHeader = () => {
  const { address, setAddress } = useContext(UserReversedGeoCode);
  const { location, setLocation } = useContext(UserLocationContext);
const [time, setTime] = useState(null)
  useEffect(() => {
    if (location !== null) {
      reverseGeoCode(location.coords.latitude, location.coords.longitude);
    }
  }, [location]);

  const reverseGeoCode = async (latitude, longitude) => {
    try {
      const [reversedGeoCodeAddress] = await Location.reverseGeocodeAsync({
        longitude: longitude,
        latitude: latitude,
      });
      console.log("GEO CODE ",reversedGeoCodeAddress);
      setAddress(reversedGeoCodeAddress);
      const greetings = getTimeOfDay()
      setTime(greetings)
    } catch (error) {
      console.error("Error in reverse geocoding: ", error);
    }
  };

  const getTimeOfDay = () => {
    const now = new Date();
    const hour = now.getHours();
  
    if (hour >= 0 && hour < 12) {
      return "🌄";
    } else if (hour >= 12 && hour < 18) {
      return "☀️";
    } else {
      return "🌄";
    }
  };
  
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={styles.outerStyle}>
        <AssetImage
          data={require('../../assets/images/profile.jpg')}
          width={50}
          height={55}
          mode={'cover'}
          radius={99}
        />
        <View style={styles.headerStyles}>
          <Text style={styles.heading}>Delivery Address</Text>
          <Text style={styles.locationStyles}>{`${address?.city} ${address?.name}`}</Text>
        </View>
      </View>
      <Text style={{fontSize:30}}>{time}</Text>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  outerStyle: {
    marginBottom: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  headerStyles: {
    marginLeft: 15,
    justifyContent: 'center',
  },
  heading: {
    fontFamily: 'medium',
    fontSize: SIZES.medium,
    color: COLORS.secondary,
  },
  locationStyles: {
    fontFamily: 'regular',
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
});
