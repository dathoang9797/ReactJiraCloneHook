import React from 'react';
import { Route } from 'react-router-dom';
import { PropsTemplate } from '@models/Global.types';
import Spinner from '@components/Spinner';
import SideBar from '@components/SideBar';
import Menu from '@components/Menu';
import ModalSearch from '@components/ModalSearch';
import ModalInfo from '@components/ModalInfo';
import styled from 'styled-components/macro';
import { useAppSelector } from '@redux/hook';
import { selectStateLoading } from '@redux/Reducer/Loading/LoadingSelector';

export const CyberContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  display: flex;
`;

const CyberTemPlates = (props: PropsTemplate) => {
  const loading = useAppSelector(selectStateLoading);
  const { Component, ...resRoute } = props;

  return (
    <Route
      {...resRoute}
      render={(propsRoute) => {
        return (
          <>
            {loading ? <Spinner /> : null}
            <CyberContainer>
              <SideBar />
              <Menu />
              <Component {...propsRoute} />
              <ModalSearch />
              <ModalInfo />
            </CyberContainer>
          </>
        );
      }}
    />
  );
};

export default CyberTemPlates;
