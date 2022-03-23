import React, {useState, useEffect} from 'react';
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
import MapView from './MapView';

const LocationPicker = props => {
  const [pickedLocation, setPickedLocation] = useState();

  const  {mapPickedLocation} = props.route.params || {}
  const {onLocationPicked} = props

  useEffect(()=>{
    if (mapPickedLocation) {     
     setPickedLocation(mapPickedLocation)
     onLocationPicked(mapPickedLocation)
    }
  }, [mapPickedLocation, onLocationPicked])

  const getLocationHandler = () => {
    console.log('pressed');
    setPickedLocation({lat: 37.78825, lng: -122.4324});
    onLocationPicked({lat: 37.78825, lng: -122.4324})
    // Geolocation.getCurrentPosition({
    //   enableHighAccuracy: true,
    //   timeout: 15000,
    // })
    //   .then(location => {
    //     console.log(location);
    //   })
    //   .catch(error => {
    //     const {code, message} = error;
    //     console.warn(code, message);
    //   });
  };
  const pickOnMapHandler = () => {
    props.navigation.navigate('Map');
  };
  return (
    <View style={styles.locationPicker}>
      <MapView style={styles.mapPreview} location={pickedLocation}>
        <Text>No Location choosed!</Text>
      </MapView>
      <View style={styles.actions}>
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
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  actions: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default LocationPicker;
