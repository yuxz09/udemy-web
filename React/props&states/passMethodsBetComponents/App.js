import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';//must uppercase, react will identifies it as a custom component

//useState returns an array with two elements and always
	//two elements
class App extends Component
{
	state = {
		persons: [
			{ name: 'Max', age: 28 },
			{ name: 'Manu', age: 29 },
			{ name: 'Stephanie', age: 26}
		],
		otherState: 'some other value'
	};	
	
	//call useState() as many as possible
//	const [otherState, setOtherState] = useState('some other value');
//	console.log(personsState, otherState);


	//we cant call switchNameHandler in a different file and different class
	switchNameHandler = (newName) => {		
		this.setState({
			persons: [
				{ name: 'Maximilian', age: 28},
				{ name: newName, age: 29},
				{ name: 'Stephanie', age: 27}
			]
//			otherState: personsState.otherState
		});
	};
/*
self-closing tag

 */
 	render(){
	  	return (
		      <div className="App">
		        <h1>Hi, I am a react App</h1>
		        <p>This is really working!</p>
		        <button onClick={() => this.switchNameHandler('Bob')}>Switch Name</button>
		        <Person 
		        	name={this.state.persons[0].name} 
		        	age={this.state.persons[0].age}
		        />
		        <Person 
		        	name={this.state.persons[1].name} 
		        	age={this.state.persons[1].age}
		        	//passing method references between components
		        	//a reference to this switchNameHandler, click property not has to be named "clicked"
		        	click = {this.switchNameHandler.bind(this, 'Max!')} 
		        >
		        	My hobbies: racing
		        </Person>
		        <Person
		        	name={this.state.persons[2].name} 
		        	age={this.state.persons[2].age}
		        />
		      </div>
	    );
  	}
  }

export default App;

/*
	switchNameHandler = () => {
	//	console.log('Was clicked!');
		this.setState({
			persons: [
				{ name: 'Maximilian', age: 28},
				{ name: 'Manu', age: 29},
				{ name: 'Stephanie', age: 27},
			]
		})
	}
 */




/*
      <div className="App">
        <h1>Hi, I am a react App</h1>
        <p>This is really working!</p>
        <Person name="Max" age="28"></Person>
        <Person name="Manu" age="29">My hobbies: racing</Person>
        <Person name="Stephanie" age="26"></Person>
      </div>
 */ 
 
//    return React.createElement('div', null, React.createElement('h1', null, 'Does this work now?')); 

/*

 	render(){
	  	return (
		      <div className="App">
		        <h1>Hi, I am a react App</h1>
		        <p>This is really working!</p>
		        <button onClick={this.switchNameHandler.bind(this, 'Bob')}>Switch Name</button>
		        <Person 
		        	name={this.state.persons[0].name} 
		        	age={this.state.persons[0].age}
		        />
		        <Person 
		        	name={this.state.persons[1].name} 
		        	age={this.state.persons[1].age}
		        	//passing method references between components
		        	//a reference to this switchNameHandler, click property not has to be named "clicked"
		        	click = {this.switchNameHandler.bind(this, 'Max!')} 
		        >
		        	My hobbies: racing
		        </Person>
		        <Person
		        	name={this.state.persons[2].name} 
		        	age={this.state.persons[2].age}
		        />
		      </div>
	    );
  	}


 */

