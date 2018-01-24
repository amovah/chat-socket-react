import React, { Component } from 'react';
import { connect } from 'react-redux';
import getOnlineUsers from '../actions/getOnlineUsers';
import User from './User';

class Sidebar extends Component {
  componentDidMount() {
    this.props.dispatch(getOnlineUsers());
  }

  render() {
    return (
      <div className='room sidebar'>
        <div className='header'>online users</div>
        {this.props.onlineUsers.map((user, i) => <User user={user} key={i} />)}
      </div>
    );
  }
}

export default connect(state => ({ onlineUsers: state.onlineUsers }))(Sidebar);
