import {combineReducers} from 'redux';

export default combineReducers({
  data: DataReducer,
  loadingState: LoadingStateReducer,
  restaurantSearchQuery: RestaurantSearchQueryReducer,
});
