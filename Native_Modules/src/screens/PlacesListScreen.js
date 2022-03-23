import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Platform, FlatList, Button} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import {useSelector, useDispatch} from 'react-redux';
import PlaceItem from '../components/PlaceItem';
import * as placesActions from '../store/places-actions';
import Colors from '../constants/Colors';

const PlacesListScreen = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(placesData)
    dispatch(placesActions.loadPlaces());
  }, [placesData]);

  props.navigation.setOptions({
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Add Place"
          iconName={Platform.OS === 'android' ? 'add' : 'ios-add'}
          onPress={() => {
            props.navigation.navigate('NewPlace');
          }}
        />
      </HeaderButtons>
    ),
  });
  const placesData = useSelector(state => state.places.places);

  return (
    <View>
        <Button title='Clear' color={Colors.primary} onPress={()=> dispatch(placesActions.deletePlaces())}/>
      <FlatList
        data={placesData}
        keyExtractor={item => item.id}
        renderItem={itemData => (
          <PlaceItem
            title={itemData.item.title}
            image={itemData.item.imageUri}
            address={itemData.item.address}
            onSelect={() => {
              props.navigation.navigate('PlaceDetail', {
                placeTitle: itemData.item.title,
                placeId: itemData.item.id,
              });
            }}
          />
        )}
      />
     
    </View>
  );
};
const styles = StyleSheet.create({});

export default PlacesListScreen;
