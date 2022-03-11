import React from 'react';
import { PropsPage } from '@models/Global.types';
import Header from '@layouts/Header';
import { useAppSelector } from '@redux/hook';
import { selectStateUser } from '@redux/Reducer/User/UserSelector';
const Home = (props: PropsPage) => {
  const userLogin = useAppSelector(selectStateUser);
  return (
    <div>
      <Header />
      Home
      {userLogin.name}
      <img src={userLogin.avatar} alt='' />
    </div>
  );
};

export default Home;
