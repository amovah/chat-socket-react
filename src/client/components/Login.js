import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
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
            <button>login</button>
            <p>You need a account? come <Link to='/signup'>here</Link></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
