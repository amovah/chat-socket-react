import React, { Component } from 'react';

class Chats extends Component {
  render() {
    return (
      <div className='inputarea room'>
        <div className='input-group'>
          <input type='text' ref='message' />
          <button ref='send'>send</button>
          </div>
      </div>
    );
  }
}

export default Chats;
