import { ThunkAction, Action, configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import loadingReducer from '@redux/Reducer/Loading/LoadingSlice';
import projectReducer from '@redux/Reducer/Project';
import projectCategoryReducer from '@redux/Reducer/ProjectCategory';
import userReducer from '@redux/Reducer/User/UserSlice';
import projectCyberBugsReducer from '@redux/Reducer/ProjectCyberBugs';
import modalReducer from '@redux/Reducer/Modal/ModalSlice';

export const store = configureStore({
  reducer: {
    loadingReducer,
    projectReducer,
    projectCategoryReducer,
    userReducer,
    projectCyberBugsReducer,
    modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type RootAction = typeof store.dispatch;
