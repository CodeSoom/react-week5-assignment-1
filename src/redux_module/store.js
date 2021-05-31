import { configureStore } from '@reduxjs/toolkit';

import selectedReducer from './selectedSlice';

export default configureStore({
  reducer: { selected: selectedReducer },
});
