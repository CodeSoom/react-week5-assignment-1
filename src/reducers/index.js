import { combineReducers } from 'redux';

import regions from './regions';
import categories from './categories';
import restaurants from './restaurants';

export default combineReducers({
  regions,
  categories,
  restaurants,
});
