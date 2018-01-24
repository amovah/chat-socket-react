import React, { Component } from 'react';

export default class extends Component {
  render() {
    return (
      <div className='user'>
        <p className='name'>{this.props.name}</p>
        <p className='username'>{this.props.username}</p>
      </div>
    );
  }
}
