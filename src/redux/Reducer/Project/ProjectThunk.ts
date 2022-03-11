import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { pageLoadingAction } from '@redux/Reducer/Loading/LoadingSlice';
import { ProjectModel } from '@models/Project.types';
import ProjectAPI from '@services/ProjectService';
import { countdown } from '@utils/TimeOut/countdown';
import {
  ErrResponseModalAPI,
  FormValues,
  ResponseModalAPI,
} from '@models/Global.types';

export const createProjectThunk = createAsyncThunk<
  ResponseModalAPI<ProjectModel>,
  FormValues,
  { rejectValue: ErrResponseModalAPI<ResponseModalAPI<string>> }
>('projects/createProject', async (Project, { dispatch, rejectWithValue }) => {
  dispatch(pageLoadingAction(true));

  const result = await ProjectAPI.createProject(Project);

  if (axios.isAxiosError(result)) {
    dispatch(pageLoadingAction(false));
    await countdown(500);
    return rejectWithValue(result);
  }

  if (!result) {
    dispatch(pageLoadingAction(false));
    await countdown(500);
    throw new Error("Dont't have data");
  }

  dispatch(pageLoadingAction(false));
  await countdown(500);
  return result.data;
  // });
});

export const createProjectAuthorThunk = createAsyncThunk<
  ResponseModalAPI<ProjectModel>,
  FormValues,
  { rejectValue: ErrResponseModalAPI<ResponseModalAPI<string>> }
>(
  'projects/createProjectAuthor',
  async (Project, { dispatch, rejectWithValue }) => {
    dispatch(pageLoadingAction(true));
    return ProjectAPI.createProjectAuthorize(Project).then(async (result) => {
      if (axios.isAxiosError(result)) {
        dispatch(pageLoadingAction(false));
        await countdown(500);
        return rejectWithValue(result);
      }

      if (!result) {
        dispatch(pageLoadingAction(false));
        await countdown(500);
        throw new Error("Dont't have data");
      }

      dispatch(pageLoadingAction(false));
      await countdown(500);
      return result.data;
    });
  }
);
