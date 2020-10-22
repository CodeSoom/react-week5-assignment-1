import { combineReducers } from 'redux';

import categoryReducer from './categoryReducer';
import regionReducer from './regionReducer';
import restaurantReducer from './restaurantReducer';

export default combineReducers({
  restaurant: restaurantReducer,
  region: regionReducer,
  category: categoryReducer,
});
