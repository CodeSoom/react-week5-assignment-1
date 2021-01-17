import { combineReducers } from 'redux';
import region from './region';
import category from './category';
import restaurant from './restaurant';

export default combineReducers({
  region,
  category,
  restaurant,
});
