import React from 'react';
import { Route } from 'react-router-dom';
import { PropsTemplate } from '@models/Global.types';
import { Layout } from 'antd';
import { useAppSelector } from '@redux/hook';
import { selectStateLoading } from '@redux/Reducer/Loading/LoadingSelector';
import Spinner from '@components/Spinner/Spinner';
const { Content } = Layout;

const UserLoginTemplate = (props: PropsTemplate) => {
  const loading = useAppSelector(selectStateLoading);
  const { Component, ...resRoute } = props;
  return (
    <Route
      {...resRoute}
      render={(propsRoute) => {
        return (
          <>
            {loading ? <Spinner /> : null}
            <Layout>
              <Content className='position-relative'>
                <Component {...propsRoute} />
              </Content>
            </Layout>
          </>
        );
      }}
    />
  );
};

export default UserLoginTemplate;
