import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

import PlacesNavigator from './navigation/PlacesNavigator';
import placesReducers from './store/places-reducers';

const rootReducer = combineReducers({
  places: placesReducers,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default App = () => {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
};
