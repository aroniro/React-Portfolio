import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from 'react-router-dom'

import Main from './layouts/Main';

import "assets/css/index.css";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/main" component={Main} />
      <Redirect form="/" to="/main" />
    </Switch>
  </Router>,
  document.getElementById('root')
);
