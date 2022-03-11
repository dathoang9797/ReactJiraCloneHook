import React from 'react';
import { PropsPage } from '@models/Global.types';
import Header from '@layouts/Header';
const About = (props: PropsPage) => {
  console.log('🚀 ~ file: About.tsx ~ line 5 ~ About ~ props', props);

  return (
    <div>
      <Header />
      About
    </div>
  );
};

export default About;
