import { ReducerProjectInitialState } from '@models/Global.types';
import { createSlice } from '@reduxjs/toolkit';
import {
  createProjectThunk,
  createProjectAuthorThunk,
} from '@redux/Reducer/Project/ProjectThunk';
import { checkError } from '@utils/Error/handleErrors';

const initialState = {} as ReducerProjectInitialState;

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProjectThunk.pending, (state, action) => {})
      .addCase(createProjectThunk.fulfilled, (state, action) => {})
      .addCase(createProjectThunk.rejected, (state, action) => {
        console.log(
          '🚀 ~ file: ProjectSlice.ts ~ line 20 ~ .addCase ~ action',
          action
        );
        if (action.payload) checkError(action.payload);
      })
      .addCase(createProjectAuthorThunk.pending, (state, action) => {})
      .addCase(createProjectAuthorThunk.fulfilled, (state, action) => {})
      .addCase(createProjectAuthorThunk.rejected, (state, action) => {
        console.log(
          '🚀 ~ file: ProjectSlice.ts ~ line 29 ~ .addCase ~ action',
          action
        );
        if (action.payload) checkError(action.payload);
      });
  },
});

export const {} = projectSlice.actions;

export default projectSlice.reducer;
