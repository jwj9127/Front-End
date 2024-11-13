import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  idValue: '',
  pwValue: ''
};

const signIn = createSlice({
  name: 'signIn',
  initialState,
  reducers: {
    setIdValue: (state, action) => {
      state.idValue = action.payload;
    },
    setPwValue: (state, action) => {
      state.pwValue = action.payload;
    }
  }
});

export const {
  setIdValue,
  setPwValue
} = signIn.actions;

export default signIn.reducer;
