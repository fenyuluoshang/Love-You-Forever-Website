import React from 'react';
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom'
import RouteLoadingComponent from './components/RouteLoading';
import Loadable from 'react-loadable';
import './App.scss';

const loadsh = function (loader: any) {
  return Loadable({
    loader,
    loading: RouteLoadingComponent
  });
}

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route name="home" exact path="/home" component={loadsh(() => import('./view/HomeView'))} />
            <Route exact path="/about" component={loadsh(() => import('./view/AboutView'))} />
            <Route exact path="/news" component={loadsh(() => import('./view/NewsView'))} />
            <Route exact path="/download" component={loadsh(() => import('./view/DownLoadView'))} />
            <Route exact path="/404" component={loadsh(() => import('./view/404'))} />
            <Route exact path="/not_open" component={loadsh(() => import('./view/NotOpenView'))} />
          </Switch>
        </HashRouter>
      </div>
    );
  }

}

export default App;
