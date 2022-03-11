import { createSlice } from '@reduxjs/toolkit';
import { ReducerProjectCategoryInitialState } from '@models/Global.types';
import { fetchProjectsCategoryThunk } from '@redux/Reducer/ProjectCategory/ProjectCategoryThunk';
import { checkError } from '@utils/Error/handleErrors';

const initialState = {
  arrProjectCategory: [],
} as ReducerProjectCategoryInitialState;

const projectCategorySlice = createSlice({
  name: 'projectCategory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjectsCategoryThunk.pending, (state, action) => {})
      .addCase(fetchProjectsCategoryThunk.fulfilled, (state, action) => {
        state.arrProjectCategory = action.payload.content;
      })
      .addCase(fetchProjectsCategoryThunk.rejected, (state, action) => {
        console.log(
          '🚀 ~ file: ProjectCategorySlice.ts ~ line 21 ~ .addCase ~ action',
          action
        );
        if (action.payload) checkError(action.payload);
      });
  },
});

export const {} = projectCategorySlice.actions;

export default projectCategorySlice.reducer;
