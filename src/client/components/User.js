import React, { Component } from 'react';

export default class extends Component {
  render() {
    return (
      <div className='user'>
        <p>
          {this.props.user.nickname} -
          <span className='username'> {this.props.user.username}</span>
        </p>
      </div>
    );
  }
}
