import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';


import PlacesNavigator from './src/navigation/PlacesNavigator';
import placesReducer from './src/store/places-reducer';
import {init} from './src/helpers/db'

init().then(()=>{
  console.log('initialized database')
}).catch(err=>{
  console.log('initializing database Falled:', err )

});


const rootReducer = combineReducers({
  places: placesReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default App = () => {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
};
