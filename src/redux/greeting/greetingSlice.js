import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getRandomGreeting = createAsyncThunk('greeting/getRandomGreeting', async () => {
  const apiURL = 'http://localhost:3000/random_greeting';

  const response = await axios.get(apiURL);
  console.log(response.data);
  return response.data.greeting;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greetings: '',
  },
  reducers: {
    setGreeting: (state, action) => {
      state.greetings = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRandomGreeting.fulfilled, (state, action) => {
      state.greetings = action.payload;
    });
  },
});

export const { setGreeting } = greetingSlice.actions;

export default greetingSlice.reducer;
