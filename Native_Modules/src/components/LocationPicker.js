import React, {useState} from 'react';
import GetLocation from 'react-native-get-location';
import RNLocation from 'react-native-location';
import Geolocation from '@react-native-community/geolocation';
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from 'react-native';
import Colors from '../constants/Colors';

const LocationPicker = props => {
  const getLocationHandler = () => {
    console.log('pressed');
    Geolocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        console.log(location);
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  };
  const pickOnMapHandler = ()=>{
    props.navigation.navigate('Map')

  }
  return (
    <View style={styles.locationPicker}>
      <View style={styles.mapPreview}>
        <Text>No Location choosed!</Text>
      </View>
      <View style = {styles.actions}>
        <Button
          title="Chose your location"
          color={Colors.primary}
          onPress={getLocationHandler}
        />
        <Button
          title="Pick on Map"
          color={Colors.primary}
          onPress={pickOnMapHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 15,
  },
  mapPreview: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  actions: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default LocationPicker;
