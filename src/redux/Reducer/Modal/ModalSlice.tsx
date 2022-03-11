import React from 'react';
import { ReducerModalInitialState } from '@models/Global.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  visible: false,
  ComponentContentDrawer: <p>Detail Content</p>,
  callBackSubmit: () => {
    alert('hello');
  },
} as ReducerModalInitialState;

const modalSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleModalAction: (
      state,
      action: PayloadAction<ReducerModalInitialState['visible']>
    ) => {
      state.visible = action.payload;
    },
  },
});

export const { toggleModalAction } = modalSlice.actions;

export default modalSlice.reducer;
