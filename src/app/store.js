import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/test/testSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
