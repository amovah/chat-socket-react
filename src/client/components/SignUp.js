import React, { Component } from 'react';

export default class extends Component {
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
            <button>sign up</button>
          </div>
        </div>
      </div>
    );
  }
}
