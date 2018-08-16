import React, { Component } from 'react';
import './UserInput.css';

class UserInput extends Component {
    
  render() {
    return (
      <div >
        <input value={this.props.defaultValue} onChange={this.props.changed}/>
      </div>
    );
  }
}

export default UserInput;
