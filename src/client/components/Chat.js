import React, { Component } from 'react';

export default class extends Component {
  render() {
    return (
      <div className='chat'>
        <span>{this.props.nickname}</span>: <span>{this.props.message}</span>
      </div>
    );
  }
}
