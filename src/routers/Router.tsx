import React, { lazy } from 'react';

import Home from '@pages/Home';
import About from '@pages/About';
import Contact from '@pages/Contact';
import Detail from '@pages/Detail';
import Profile from '@pages/Profile';
import PageNotFound from '@pages/PageNotFound';
// const Home = lazy(() => import('@pages/Home'));
// const About = lazy(() => import('@pages/About'));
// const Contact = lazy(() => import('@pages/Contact'));
// const Detail = lazy(() => import('@pages/Detail'));
// const Profile = lazy(() => import('@pages/Profile'));
// const Login = lazy(() => import('@pages/Login'));
// const PageNotFound = lazy(() => import('@pages/PageNotFound'));

export const routers = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/detail/:id', component: Detail },
  { path: '/profile', component: Profile },
  { path: '*', component: PageNotFound },
];
