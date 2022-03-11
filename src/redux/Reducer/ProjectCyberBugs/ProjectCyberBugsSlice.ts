import { createSlice } from '@reduxjs/toolkit';
import { ReducerProjectCyberBugsInitialState } from '@models/Global.types';
import { fetchListProjects } from '@redux/Reducer/ProjectCyberBugs/ProjectCyberBugsThunk';
import { checkError } from '@utils/Error/handleErrors';
const initialState = { projectList: [] } as ReducerProjectCyberBugsInitialState;

const ProjectCyberBugsSlice = createSlice({
  name: 'CyberBugs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListProjects.fulfilled, (state, action) => {
        state.projectList = action.payload.content;
      })
      .addCase(fetchListProjects.rejected, (state, action) => {
        console.log(
          '🚀 ~ file: ProjectCyberBugsSlice.ts ~ line 17 ~ .addCase ~ action',
          action
        );
        if (action.payload) checkError(action.payload);
      });
  },
});

export const {} = ProjectCyberBugsSlice.actions;

export default ProjectCyberBugsSlice.reducer;
