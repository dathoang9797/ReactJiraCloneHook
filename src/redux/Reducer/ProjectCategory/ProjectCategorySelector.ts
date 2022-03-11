import { RootState } from '@redux/store';
export const selectStateProjectCategory = (state: RootState) =>
  state.projectCategoryReducer.arrProjectCategory;
