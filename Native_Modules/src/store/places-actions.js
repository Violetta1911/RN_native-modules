// import * as FileSystem from 'react-native-fs';
export const ADD_PLACE = 'ADD_PLACE';
export const SET_PLACES = 'SET_PLACES';
export const DELETE_PLACES = 'DELETE_PLACES';
import {insertPlace, fetchPlaces, delPlaces} from '../helpers/db';
import vars from '../../env';

export const addPlace = (title, imageUri, location) => {
  return async dispatch => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?longlat=${location.lat},${location.lng}&key=${vars.googleApiKey}`,
    );
    if (!response.ok) {
      throw new Error('Something went wrong')
    }
    const resData = await response.json();
    if (!resData.results) {
      throw new Error('Something went wrong')
    }
    const address = resData.results[0].formatted_address;
     
    // const fileName = imageUri.split('/').pop();
    // const newPath = FileSystem.DocumentDirectoryPath + fileName;
    // try {
    //   await FileSystem.moveAsync({
    //     from: imageUri,
    //     to: newPath,
    //   });
    // } catch (err) {
    //   console.log(err);
    //   throw err;
    // }
    try {
      const dbResult = await insertPlace(
        title,
        imageUri,
        address,
        location.lat,
        location.lng,
      );
      dispatch({
        type: ADD_PLACE,
        placeData: {id: dbResult.insertId, title: title, imageUri: imageUri, address: address, coord: {lat: location.lat, lng: location.lng}},
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const loadPlaces = () => {
  return async dispatch => {
    try {
      const dbResult = await fetchPlaces();
      const dataPlaces = dbResult.rows.raw();
      dispatch({type: SET_PLACES, places: dataPlaces});
    } catch (err) {
      throw err;
    }
  };
};

export const deletePlaces = () => {
  return async dispatch => {
    try {
      const dbResult = await delPlaces();
      const dataPlaces = dbResult.rows.raw();
      dispatch({type: SET_PLACES, places: dataPlaces});
    } catch (err) {
      throw err;
    }
  };
};
