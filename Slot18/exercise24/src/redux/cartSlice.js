import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    updateCart: (state, action) => {
      const index = state.findIndex(p => p.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
    deleteFromCart: (state, action) => {
      return state.filter(p => p.id !== action.payload);
    }
  }
});

export const { addToCart, updateCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
