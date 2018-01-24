import React, { Component } from 'react';

export default class extends Component {
  @shared.bind
  submit() {
    shared.socket.once('signup', res => {
      res ? this.props.history.push('/login') : alert('Something is wrong');
    });

    shared.socket.emit('signup', {
      nickname: this.refs.nickname.value,
      username: this.refs.username.value,
      password: this.refs.password.value
    });
  }

  render() {
    return (
      <div>
        <div className='home background' />
        <div className='home container'>
          <div className='header'>
            <h3 className='center'>sign up</h3>
          </div>
          <div className='form-group'>
            <div className='input-group'>
              <label>nickname:</label><br/>
              <input type='text' ref='nickname' />
            </div>
            <div className='input-group'>
              <label>username:</label><br/>
              <input type='text' ref='username' />
            </div>
            <div className='input-group'>
              <label>password:</label><br/>
              <input type='password' ref='password' />
            </div>
            <button onClick={this.submit}>sign up</button>
            <p>you already have account? come <Link to='/login'>here</Link></p>
          </div>
        </div>
      </div>
    );
  }
}
