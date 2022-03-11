import { ReducerLoadingInitialState } from '@models/Global.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = { loading: false } as ReducerLoadingInitialState;

const loadingSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    pageLoadingAction: (
      state,
      action: PayloadAction<ReducerLoadingInitialState['loading']>
    ) => {
      state.loading = action.payload;
    },
  },
});

export const { pageLoadingAction } = loadingSlice.actions;

export default loadingSlice.reducer;
