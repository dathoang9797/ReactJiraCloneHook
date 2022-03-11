import axios from 'axios';
import { baseUrlProjectCategory } from '@utils/Domain/domainJira';
import { ErrResponseModalAPI, ResponseModalAPI } from '@models/Global.types';
import { ProjectsCategoryModal } from '@models/ProjectCategory.types';

class ProjectCategory {
  private projectCategoryAPI = axios.create({
    baseURL: baseUrlProjectCategory,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  });
  public getProjectCategory = () =>
    this.projectCategoryAPI
      .get<Omit<ResponseModalAPI<ProjectsCategoryModal>, 'message'>>('')
      .catch<ErrResponseModalAPI>((err) => err);
}

export default new ProjectCategory();
