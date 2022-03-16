import {ADD_PLACE, SET_PLACES, DELETE_PLACES} from './places-actions';
import Place from '../models/place';

const initialState = {
  places: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACES:    
      return{
        places: action.places.map(pl => new Place(pl.id, pl.title, pl.imageUri ))
      }
    case DELETE_PLACES: {
      return{
        places: action.places
      }
    }  
    case ADD_PLACE:
      const newPlace = new Place(
        action.placeData.id.toString(),
        action.placeData.title,
        action.placeData.imageUri,
      );

      return {
        places: state.places.concat(newPlace),
      };

    default:
      return state;
  }
};
