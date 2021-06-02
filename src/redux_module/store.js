import { configureStore } from '@reduxjs/toolkit';

import selectedReducer from './selectedSlice';
import groupsReducer from './groupsSlice';

export default configureStore({
  reducer: {
    selected: selectedReducer,
    groups: groupsReducer,
  },
});
