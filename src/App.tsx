import React from 'react';
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom'
import LoadingComponent from './components/LoadingComponent';
import Loadable from 'react-loadable';

import './App.scss';

const loadsh = function (loader: any) {
  return Loadable({
    loader,
    loading: LoadingComponent
  });
}

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Redirect exact from="/" to="/home"></Redirect>
          <Route exact path="/home" component={loadsh(() => import('./view/HomeView'))}></Route>
          <Route exact path="/about" component={loadsh(() => import('./view/AboutView'))}></Route>
          <Route exact path="/news" component={loadsh(() => import('./view/NewsView'))}></Route>
          <Route exact path="/download" component={loadsh(() => import('./view/DownLoadView'))}></Route>
          <Route exact path="/404" component={loadsh(() => import('./view/404'))}></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
