import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userInput: "ads"
  };

  changeUserHandler = (event) => {
    this.setState({
      userInput: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1>My First React App</h1>
        <UserInput defaultValue={this.state.userInput} changed={this.changeUserHandler}/>
        <UserOutput username={this.state.userInput}/>

        <UserOutput username="Hamza"/>
        <button onClick={this.changeUserHandler}>Change Username</button>
      </div>
    );
  }
}

export default App;
