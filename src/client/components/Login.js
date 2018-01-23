import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/login';

class Login extends Component {
  @shared.bind
  login() {
    shared.socket.once('login', res => {
      res ? this.props.dispatch(login(res)) : alert('damn it');
    });

    shared.socket.emit('login', {
      username: this.refs.username.value,
      password: this.refs.password.value
    });
  }

  @shared.bind
  log() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <div className='home background' />
        <div className='home container'>
          <div className='header'>
            <h3 className='center'>login</h3>
          </div>
          <div className='form-group'>
            <div className='input-group'>
              <label>username:</label><br/>
              <input type='text' ref='username' />
            </div>
            <div className='input-group'>
              <label>password:</label><br/>
              <input type='password' ref='password' />
            </div>
            <button onClick={this.login}>login</button>
            <button onClick={this.log}>login</button>
            <p>You need a account? come <Link to='/signup'>here</Link></p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => state)(Login);
