import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Denied from './Denied';

class ProtectedRoute extends Component {
  render() {
    if (this.props.user.logged) {
      return (
        <Route path={this.props.path}>
          {this.props.children}
        </Route>
      );
    } else {
      return <Denied/>;
    }
  }
}

export default connect(state => state)(ProtectedRoute);
