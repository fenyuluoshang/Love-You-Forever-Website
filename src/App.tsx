import React from 'react';
import { HashRouter, Switch, Redirect, Route } from 'react-router-dom'
import LoadingComponent from './components/LoadingComponent';
import Loadable from 'react-loadable';

import bgImage from './assets/wallhaven-13m9z9-size1920.jpg'
import './App.scss';

const loadsh = function (loader: any) {
  return Loadable({
    loader,
    loading: LoadingComponent
  });
}

class App extends React.Component {

  state: {
    doms: React.ReactElement[]
  }

  constructor(props: any) {
    super(props)
    this.state = {
      doms: []
    }
    this.loadhome = this.loadhome.bind(this)
  }

  async loadhome() {
    await new Promise((res, rej) => {
      let imgdom = document.createElement('img')
      imgdom.src = bgImage
      imgdom.style.display = "none"
      imgdom.addEventListener('load', () => {
        res()
        document.body.removeChild(imgdom)
      })
      document.body.appendChild(imgdom)
    })
    return await import('./view/HomeView')
  }

  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <Route exact path="/home" component={loadsh(() => this.loadhome())} />
            <Route exact path="/about" component={loadsh(() => import('./view/AboutView'))} />
            <Route exact path="/news" component={loadsh(() => import('./view/NewsView'))} />
            <Route exact path="/download" component={loadsh(() => import('./view/DownLoadView'))} />
            <Route exact path="/404" component={loadsh(() => import('./view/404'))} />
            <Route exact path="/not_open" component={loadsh(() => import('./view/NotOpenView'))} />
          </Switch>
        </HashRouter>
        {this.state.doms}
      </div>
    );
  }

}

export default App;
