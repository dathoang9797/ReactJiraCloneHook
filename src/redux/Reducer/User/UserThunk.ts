import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { pageLoadingAction } from '@redux/Reducer/Loading/LoadingSlice';
import { UserModel } from '@models/User.types';
import { TOKEN, USER_LOGIN } from '@utils/Constants/settingSystems';
import UserServiceAPI from '@services/UserService';
import History from '@utils/libs/History';
import { countdown } from '@utils/TimeOut/countdown';
import { ResponseModalAPI, ErrResponseModalAPI } from '@models/Global.types';

export const signInUserThunk = createAsyncThunk<
  ResponseModalAPI<UserModel>,
  Pick<UserModel, 'email' | 'passWord'>,
  {
    rejectValue: ErrResponseModalAPI<
      ResponseModalAPI<Pick<UserModel, 'email' | 'passWord'> | string>
    >;
  }
>('user/userSignIn', async (userSignIn, { dispatch, rejectWithValue }) => {
  dispatch(pageLoadingAction(true));
  return UserServiceAPI.signIn(userSignIn).then(async (result) => {
    if (axios.isAxiosError(result)) {
      await countdown(500);
      dispatch(pageLoadingAction(false));
      return rejectWithValue(result);
    }

    if (!result) {
      await countdown(500);
      dispatch(pageLoadingAction(false));
      throw new Error("Can't Sign In");
    }

    await countdown(500);
    dispatch(pageLoadingAction(false));
    localStorage.setItem(TOKEN, result.data.content.accessToken ?? '');
    localStorage.setItem(USER_LOGIN, JSON.stringify(result.data.content));
    History.push('/');
    return result.data;
  });
});
