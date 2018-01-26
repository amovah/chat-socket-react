import React, { Component } from 'react';

class Chats extends Component {
  @shared.bind
  send() {
    shared.socket.emit('message', this.refs.message.value);
  }

  render() {
    return (
      <div className='inputarea room'>
        <div className='input-group'>
          <input type='text' ref='message' />
          <button ref='send' onClick={this.send}>send</button>
          </div>
      </div>
    );
  }
}

export default Chats;
