import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { pageLoadingAction } from '@redux/Reducer/Loading/LoadingSlice';
import ProjectCategoryAPI from '@services/ProjectCategory';
import { countdown } from '@utils/TimeOut/countdown';
import { ProjectsCategoryModal } from '@models/ProjectCategory.types';
import { ErrResponseModalAPI, ResponseModalAPI } from '@models/Global.types';

export const fetchProjectsCategoryThunk = createAsyncThunk<
  Omit<ResponseModalAPI<ProjectsCategoryModal>, 'message'>,
  void,
  { rejectValue: ErrResponseModalAPI }
>(
  'projectCategory/fetchProject',
  async (_undefined, { dispatch, rejectWithValue }) => {
    dispatch(pageLoadingAction(true));
    return ProjectCategoryAPI.getProjectCategory().then(async (result) => {
      if (axios.isAxiosError(result)) {
        await countdown(500);
        dispatch(pageLoadingAction(false));
        return rejectWithValue(result);
      }

      if (!result) {
        await countdown(500);
        dispatch(pageLoadingAction(false));
        throw new Error("Don't Project Category data");
      }

      await countdown(500);
      dispatch(pageLoadingAction(false));
      return result.data;
    });
  }
);
