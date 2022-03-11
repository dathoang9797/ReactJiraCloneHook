import { ProjectModel } from './../../../models/Project.types';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { pageLoadingAction } from '@redux/Reducer/Loading/LoadingSlice';
import ProjectServiceAPI from '@services/ProjectService';
import { countdown } from '@utils/TimeOut/countdown';
import { ResponseModalAPI, ErrResponseModalAPI } from '@models/Global.types';

export const fetchListProjects = createAsyncThunk<
  ResponseModalAPI<ProjectModel[]>,
  void,
  {
    rejectValue: ErrResponseModalAPI<ResponseModalAPI<string>>;
  }
>('cyberBugs/FetchProjects', async (_, { dispatch, rejectWithValue }) => {
  dispatch(pageLoadingAction(true));
  return ProjectServiceAPI.getAllProject().then(async (result) => {
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
    return result.data;
  });
});
