import { combineReducers } from 'redux';

import DataReducer from './DataReducer';
import LoadingStateReducer from './LoadingStateReducer';
import RestaurantSearchQueryReducer from './RestaurantSearchQueryReducer';

export default combineReducers({
  restaurantData: DataReducer,
  loadingState: LoadingStateReducer,
  restaurantSearchQuery: RestaurantSearchQueryReducer,
});
