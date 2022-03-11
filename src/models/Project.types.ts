import { UserModel } from '@models/User.types';

//Projects  Service Modal
export type ProjectModel = {
  id: number;
  deleted: boolean;
  members?: Pick<UserModel, 'id' | 'name' | 'avatar'>[];
  creator?: {
    id: number;
    name: string;
  };
  projectName: string;
  description: string;
  categoryId: number;
  categoryName: string;
  alias: string;
};
