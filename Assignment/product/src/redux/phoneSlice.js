import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3001/phones';

export const fetchPhones = createAsyncThunk('phones/fetchPhones', async () => {
  const res = await axios.get(API_URL);
  return res.data;
});

export const addPhone = createAsyncThunk('phones/addPhone', async (newPhone) => {
  const res = await axios.post(API_URL, newPhone);
  return res.data;
});

export const deletePhone = createAsyncThunk('phones/deletePhone', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

export const updatePhone = createAsyncThunk('phones/updatePhone', async (phone) => {
  const res = await axios.put(`${API_URL}/${phone.id}`, phone);
  return res.data;
});

const phoneSlice = createSlice({
  name: 'phones',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhones.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPhones.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchPhones.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addPhone.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deletePhone.fulfilled, (state, action) => {
        state.items = state.items.filter(phone => phone.id !== action.payload);
      })
      .addCase(updatePhone.fulfilled, (state, action) => {
        const index = state.items.findIndex(phone => phone.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      });
  },
});

export default phoneSlice.reducer;