import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';

const PlacesListScreen = props => {
    props.navigation.setOptions({
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title='Add Place' iconName={Platform.OS === 'android' ? 'add' : 'ios-add'} onPress={()=>{
              props.navigation.navigate('NewPlace')
            }}/>
            </HeaderButtons>) 
    
      })
        
  return (
    <View>
      <Text>Places List Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({});

export default PlacesListScreen;
