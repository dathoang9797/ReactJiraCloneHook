import { RootState } from '@redux/store';

export const selectStateProject = (state: RootState) => state.projectReducer.project;
