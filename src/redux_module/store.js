import { configureStore } from '@reduxjs/toolkit';

import restaurantReducer from './RestaurantSlice';

export default configureStore({
  reducer: {
    restaurant: restaurantReducer,
  },
});
