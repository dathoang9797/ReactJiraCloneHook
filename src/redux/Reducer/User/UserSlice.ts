import { createSlice } from '@reduxjs/toolkit';
import { UserModel } from '@models/User.types';
import { ReducerUserInitialState } from '@models/Global.types';
import { USER_LOGIN } from '@utils/Constants/settingSystems';
import { signInUserThunk } from '@redux/Reducer/User/UserThunk';
import { checkError } from '@utils/Error/handleErrors';

const initialState = { user: {} } as ReducerUserInitialState;
let userLogin = {} as UserModel;
if (localStorage.getItem(USER_LOGIN)) {
  userLogin = JSON.parse(localStorage.getItem(USER_LOGIN) ?? '');
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signInUserThunk.pending, (state, action) => {})
      .addCase(signInUserThunk.fulfilled, (state, action) => {})
      .addCase(signInUserThunk.rejected, (state, action) => {
        console.log(
          '🚀 ~ file: UserSlice.ts ~ line 23 ~ .addCase ~ action',
          action
        );
        if (action.payload) checkError(action.payload);
      })
      .addDefaultCase((state, action) => {
        state.user = userLogin;
      });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
