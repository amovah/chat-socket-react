import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Chats from './Chats';
import InputArea from './InputArea';

class Room extends Component {
  render() {
    return (
      <div>
        <div className='room background' />
        <Sidebar />
        <Chats />
        <InputArea />
      </div>
    );
  }
}

export default Room;
