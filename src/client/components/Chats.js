import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chat from './Chat';

class Chats extends Component {
  componentDidUpdate() {
    this.refs.section.scroll(0, this.refs.section.scrollHeight);
  }

  render() {
    return (
      <div className='chats room' ref='section'>
        {this.props.messages.map((message, i) =>
          <Chat key={i} message={message} />
        )}
      </div>
    );
  }
}

export default connect(state => ({ messages: state.messages }))(Chats);
