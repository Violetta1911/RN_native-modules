// import * as FileSystem from 'react-native-fs';
export const ADD_PLACE = 'ADD_PLACE';
export const SET_PLACES = 'SET_PLACES';
export const DELETE_PLACES = 'DELETE_PLACES';
import {insertPlace, fetchPlaces, delPlaces} from '../helpers/db';

export const addPlace = (title, imageUri) => {
  return async dispatch => {
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
        'Dummy address',
        15.6,
        12.3,
      );
      dispatch({
        type: ADD_PLACE,
        placeData: {id: dbResult.insertId, title: title, imageUri: imageUri},
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
      const dataPlaces = dbResult.rows.raw()
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
      const dataPlaces =   dbResult.rows.raw()
      dispatch({type: SET_PLACES, places: dataPlaces});
    } catch (err) {
      throw err;
    }
  };
};
