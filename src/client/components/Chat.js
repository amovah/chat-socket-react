import React, { Component } from 'react';

export default class extends Component {
  render() {
    return (
      <div className='chat'>
        <span>{this.props.message.nickname}</span>:
        <span>{this.props.message.text}</span>
      </div>
    );
  }
}
