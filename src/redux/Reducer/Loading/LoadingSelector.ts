import { RootState } from '@redux/store';
export const selectStateLoading = (state: RootState) =>
  state.loadingReducer.loading;
