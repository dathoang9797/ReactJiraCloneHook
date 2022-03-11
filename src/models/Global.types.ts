import { AxiosError } from 'axios';
import { ProjectModel } from '@models/Project.types';
import { ProjectsCategoryModal } from '@models/ProjectCategory.types';
import { RouteProps, RouteComponentProps } from 'react-router-dom';
import { UserModel } from '@models/User.types';

//Props
export type PropsPage = RouteComponentProps;

//Template
export type PropsTemplate = {
  Component: React.ComponentType<RouteComponentProps>;
} & RouteProps;

//State
export type StateProjectManager = {
  pagination?: any;
  filteredInfo?: ProjectModel | null | {};
  sortedInfo?: ProjectModel | null | {};
};

//Reducer
export type ReducerLoadingInitialState = {
  loading: boolean;
};
export type ReducerUserInitialState = {
  user: UserModel;
};
export type ReducerProjectInitialState = { project: ProjectModel };
export type ReducerProjectCategoryInitialState = {
  arrProjectCategory: ProjectsCategoryModal;
};
export type ReducerProjectCyberBugsInitialState = {
  projectList: ProjectModel[];
};
export type ReducerModalInitialState = {
  visible: boolean;
  ComponentContentDrawer: React.ReactElement<HTMLParagraphElement>;
  callBackSubmit: () => void;
};

//Form
export type FormValues = Pick<ProjectModel, 'projectName' | 'description' | 'categoryId'>;

//Service
export type ParamLoginFacebook = { facebookToken: string };

//Responsive Service
export type ResponseModalAPI<T> = {
  statusCode: number;
  message: string;
  content: T;
  dateTime: string;
};

//Error Responsive Service
export type ErrResponseModalAPI<T = any> = AxiosError<T>;
