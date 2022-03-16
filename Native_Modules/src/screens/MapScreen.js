import React, {useState, useCallback, useEffect} from 'react';
import {Text, StyleSheet, Platform, TouchableOpacity, Alert} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Colors from '../constants/Colors';

const MapScreen = props => {
  props.navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity style={styles.headerButton} onPress={savePickedLocationHandler}>
        <Text style={styles.headerButtonText}>Save</Text>
      </TouchableOpacity>
    ),
  });
  const [selectedLocation, setSelectedLocation] = useState();
  let markerCoordinates;

  const mapRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const selectLocationHandler = event => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
    console.log(selectedLocation);
  };

  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng,
    };
    console.log(markerCoordinates);
  }

  const savePickedLocationHandler = useCallback(() =>{
    if(!selectedLocation){
      return;
    }
    props.navigation.navigate('NewPlace', {pickedLocation: selectedLocation});
  }, [selectedLocation])

  useEffect (()=>{
    props.navigation.setOptions({saveLocation: savePickedLocationHandler})
  }, [savePickedLocationHandler])

  return (
    <MapView
      style={styles.wrapper}
      region={mapRegion}
      onPress={selectLocationHandler}>
      {markerCoordinates && (
        <Marker title="Picked Location" coordinate={markerCoordinates} />
      )}
    </MapView>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  headerButtonText: {
     color: Platform.OS === 'android' ? 'white' : Colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerButton: {
    marginHorizontal: 20
  }
});

export default MapScreen;
