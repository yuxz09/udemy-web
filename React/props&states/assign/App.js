/*
Create TWO new components: UserInput and UserOutput

UserInput should hold an input element, UserOutput two paragraphs

Output multiple UserOutput components in the App component (any paragraph texts of your choice)

Pass a username (of your choice) to UserOutput via props and display it there

Add state to the App component (=> the username) and pass the username to the UserOutput component

Add a method to manipulate the state (=> an event-handler method)

Pass the event-handler method reference to the UserInput component and bind it to the input-change event

Ensure that the new input entered by the user overwrites the old username passed to UserOutput

Add two-way-binding to your input (in UserInput) to also display the starting username

Add styling of your choice to your components/ elements in the components 

  - both with inline styles and stylesheets

 */

import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
      username: 'Ariel'
  };


  nameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }


  render() {
    return (
      <div className="App">
        <UserOutput
          username = 'Julie' 
        />
        <UserOutput
          username={this.state.username}
        />  
        <UserInput
            changed = {this.nameChangedHandler} 
            username={this.state.username}   
        />   
      </div>
    );
  }
};

export default App;






