import { RootState } from '@redux/store';
export const selectStateProjectCyberBugs = (state: RootState) =>
  state.projectCyberBugsReducer.projectList;
