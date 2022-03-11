import React, { Suspense } from 'react';
import 'antd/dist/antd.css';
import { Route, Switch, Router } from 'react-router-dom';
import { routers } from '@routers/Router';
import UserLoginTemplate from '@templates/UserLoginTemplate';
import Spinner from '@components/Spinner';
import History from '@utils/libs/History';
import CyberTemPlates from '@templates/CyberTemPlates';
import ProjectCyberBugs from '@pages/CyberBugs/Project/Project';
import LoginCyberBugs from '@pages/CyberBugs/Login';
import CreateProject from '@pages/CyberBugs/CreateProject/CreateProject';
import ProjectManager from '@pages/CyberBugs/ProjectManager/ProjectManager';
import ModalCyberbugs from '@hoc/Cyberbugs/ModalCyberbugs';

function App() {
  return (
    <div className='App'>
      <Router history={History}>
        <Suspense fallback={<Spinner />}>
          <ModalCyberbugs />
          <Switch>
            <CyberTemPlates
              path='/cyberbugs'
              exact
              Component={ProjectCyberBugs}
            />
            <CyberTemPlates
              path='/projectsetting'
              exact
              Component={CreateProject}
            />
            <CyberTemPlates
              path='/projectmanager'
              exact
              Component={ProjectManager}
            />
            <UserLoginTemplate path='/login' exact Component={LoginCyberBugs} />
            {routers.map(({ component, path }, index) => {
              return (
                <Route key={index} path={path} component={component} exact />
              );
            })}
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
