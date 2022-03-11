import { RootState } from '@redux/store';
export const selectStateUser = (state: RootState) => state.userReducer.user;
