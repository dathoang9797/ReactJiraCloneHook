import React, { useEffect, useState, useRef, useMemo } from 'react';
import HtmlReactParser from 'html-react-parser';
import { Table, Button, Space } from 'antd';
import { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { ProjectModel } from '@models/Project.types';
import { FilterValue, SorterResult } from 'antd/es/table/interface';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useAppSelector, useAppDispatch } from '@redux/hook';
import { selectStateProjectCyberBugs } from '@redux/Reducer/ProjectCyberBugs/ProjectCyberBugsSelector';
import { StateProjectManager } from '@models/Global.types';
import { fetchListProjects } from '@redux/Reducer/ProjectCyberBugs/ProjectCyberBugsThunk';
import _ from 'lodash';
import Tag from 'antd/es/tag';
import { RootAction } from '@redux/store';
import { toggleModalAction } from '@redux/Reducer/Modal/ModalSlice';

const createColumns = (dispatch: RootAction) => {
  console.log('createColumns again');

  const columns: ColumnsType<ProjectModel> = [
    {
      title: 'idProject',
      dataIndex: 'id',
      sorter: (item2, item1) => item2.id - item1.id,
      sortDirections: ['descend'],
    },
    {
      title: 'ProjectName',
      dataIndex: 'projectName',
      sorter: (item2, item1) => {
        if (
          item2.projectName.trim().toLowerCase() <
          item1.projectName.trim().toLowerCase()
        )
          return -1;
        if (
          item2.projectName.trim().toLowerCase() >
          item1.projectName.trim().toLowerCase()
        )
          return 1;
        return 0;
      },
      sortDirections: ['descend'],
    },
    {
      title: 'CategoryName',
      dataIndex: 'categoryName',
      sorter: (item2, item1) => {
        if (
          item2.categoryName.trim().toLowerCase() <
          item1.categoryName.trim().toLowerCase()
        )
          return -1;
        if (
          item2.categoryName.trim().toLowerCase() >
          item1.categoryName.trim().toLowerCase()
        )
          return 1;
        return 0;
      },
      sortDirections: ['descend'],
    },
    {
      title: 'Creator',
      render: (text, record, index) => {
        return <Tag color={'green'}>{record.creator?.name}</Tag>;
      },
      sorter: (item2, item1) => {
        if (item1.creator?.name && item2.creator?.name) {
          if (
            item2.creator.name.trim().toLowerCase() <
            item1.creator.name.trim().toLowerCase()
          )
            return -1;
          if (
            item2.creator.name.trim().toLowerCase() >
            item1.creator.name.trim().toLowerCase()
          )
            return 1;
        }
        return 0;
      },
      sortDirections: ['descend'],
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: string, record, index) => (
        <Space size='small'>
          <button
            className='btn btn-primary'
            onClick={() => {
              dispatch(toggleModalAction(true));
            }}
          >
            <EditOutlined />
          </button>
          <button className='btn btn-danger'>
            <DeleteOutlined />
          </button>
        </Space>
      ),
    },
  ];
  return columns;
};

const ProjectManager = () => {
  const dispatch = useAppDispatch();
  const projectList = useAppSelector(selectStateProjectCyberBugs);
  const columns = useMemo(() => createColumns(dispatch), [dispatch]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (_.isEmpty(projectList)) {
      dispatch(fetchListProjects());
    }
  }, []);

  const [state, setState] = useState<StateProjectManager>({
    filteredInfo: null,
    sortedInfo: null,
  });

  const handleChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<ProjectModel> | SorterResult<ProjectModel>[]
  ) => {
    setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  const clearFilters = () => {
    setState({
      filteredInfo: null,
    });
  };

  const clearAll = () => {
    setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  const setAgeSort = () => {
    setState({
      sortedInfo: {
        description: 'demo',
      },
    });
  };

  let { sortedInfo, filteredInfo } = state;
  sortedInfo = sortedInfo || {};
  filteredInfo = filteredInfo || {};

  return (
    <div className='mt-5 container'>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count {count}
      </button>
      <h3>Project Manager</h3>
      <Space style={{ marginBottom: 16 }}>
        <Button onClick={setAgeSort}>Sort age</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table
        columns={columns}
        rowKey={'id'}
        dataSource={projectList}
        onChange={handleChange}
      />
    </div>
  );
};

export default ProjectManager;
