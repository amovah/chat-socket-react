import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Login from './Login';
import SignUp from './SignUp';
import NotFound from './NotFound';

export default class extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
          <Redirect exact from='/' to='/login' />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
