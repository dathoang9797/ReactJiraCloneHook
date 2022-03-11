import React, { useEffect, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';
import { withFormik, FormikProps } from 'formik';
import { FormValues } from '@models/Global.types';
import { SchemaOf } from 'yup';
import * as Yup from 'yup';
import { fetchProjectsCategoryThunk } from '@redux/Reducer/ProjectCategory/ProjectCategoryThunk';
import { createProjectAuthorThunk } from '@redux/Reducer/Project/ProjectThunk';
import { useAppDispatch } from '@redux/hook';
import { RootAction, RootState } from '@redux/store';
import { connect } from 'react-redux';
import _ from 'lodash';

const CreateProject = (
  props: FormikProps<FormValues> &
    ReturnType<typeof mapDispatchToProps> &
    ReturnType<typeof mapStateToProps>
) => {
  const { handleChange, handleSubmit, setFieldValue, projectsCategoryState } =
    props;
  const editorRef = useRef<string | null>(null);
  const dispatch = useAppDispatch();

  const handleOnEditorChange = (content: string, editor: TinyMCEEditor) => {
    setFieldValue('description', content);
  };

  useEffect(() => {
    if (_.isEmpty(projectsCategoryState)) {
      dispatch(fetchProjectsCategoryThunk());
    }
  }, []);

  return (
    <div className='container mt-5 ml-5'>
      <h3>Create Project</h3>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <div className='form-group'>
          <label htmlFor='projectName'>Name</label>
          <input
            type='text'
            className='form-control'
            id='projectName'
            name='projectName'
            placeholder='Enter project name'
          />
        </div>
        <div className='form-group'>
          <p>Description</p>
          <Editor
            onInit={(evt, editor) => (editorRef.current = editor.getContent())}
            onEditorChange={handleOnEditorChange}
            initialValue='<p>This is the initial content of the editor'
            init={{
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar:
                'undo redo | formatselect | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style:
                'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
          />
        </div>
        <div className='form-group'>
          <select
            name='categoryId'
            id=''
            className='form-control'
            onChange={handleChange}
          >
            {projectsCategoryState.map((item) => (
              <option key={item.id} value={item.id}>
                {item.projectCategoryName}
              </option>
            ))}
          </select>
        </div>
        <button className='btn btn-outline-primary' type='submit'>
          Create Project
        </button>
      </form>
    </div>
  );
};

const createProjectFormik = withFormik<
  ReturnType<typeof mapDispatchToProps> & ReturnType<typeof mapStateToProps>,
  FormValues
>({
  // Transform outer props into form values
  enableReinitialize: true,
  mapPropsToValues: (props) => {
    const { projectsCategoryState } = props;
    return {
      projectName: '',
      description: '',
      categoryId: projectsCategoryState[0]?.id,
    };
  },

  validationSchema: Yup.object().shape({}) as SchemaOf<FormValues>,

  handleSubmit: (values, { props }) => {
    const { projectDispatch } = props;
    projectDispatch.createProjectAuthorThunk(values);
  },

  displayName: 'CreateProjectFormik',
})(CreateProject);

const mapStateToProps = (state: RootState) => {
  return {
    projectsCategoryState: state.projectCategoryReducer.arrProjectCategory,
  };
};

const mapDispatchToProps = (dispatch: RootAction) => {
  return {
    projectDispatch: {
      createProjectAuthorThunk: (field: FormValues) =>
        dispatch(createProjectAuthorThunk(field)),
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(createProjectFormik);
