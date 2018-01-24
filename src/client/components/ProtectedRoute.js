import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class ProtectedRoute extends Component {
  render() {
    if (this.props.user.logged) {
      return (
        <Route path={this.props.path} component={this.props.component}>
          {this.props.children}
        </Route>
      );
    } else {
      return (
        <Redirect to='/login' />
      );
    }
  }
}

export default connect(state => state)(ProtectedRoute);
