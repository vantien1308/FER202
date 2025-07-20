import { configureStore } from '@reduxjs/toolkit';
import phoneReducer from './phoneSlice';
import authReducer from './authSlice';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    phones: phoneReducer,
    auth: authReducer,
    cart: cartReducer,
  },
});