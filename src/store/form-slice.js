import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  name: '',
  description: ''
};

export const formSlice = createSlice({
  name: 'form',
  initialState: initialState,
  reducers: {
    setName(state, action){
      const value = action.payload;
      state.name = value;
    },

    setDescription(state, action){
      const value = action.payload;
      state.description = value;
    },

    resetState(state){
      state.id = 0;
      state.name = '';
      state.description = '';
    }
  }
});

export const formActions = formSlice.actions;
