import React from 'react'
import { render } from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from "react-router"
import App from './modules/App'
import Home from './modules/Home'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} /> 
      <Route path="/about" component={About} />
      <Route path="/repos" component={Repos}>
        <Route path="/repo/:userName/:repoName" component={Repo} />
      </Route>
    </Route>
  </Router>

), document.getElementById('app'))
