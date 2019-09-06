import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';//must uppercase, react will identifies it as a custom component

//useState returns an array with two elements and always
	//two elements
const App = props =>
{	
	const [ personsState, setPersonsState ] = useState({
		persons: [ 
			{ name: 'Max', age: 28 },
			{ name: 'Manu', age: 29 },
			{ name: 'Stephanie', age: 26 }
		],
		otherState: 'some other value'
	});
	//call useState() as many as possible
	const [otherState, setOtherState] = useState('some other value');
	console.log(personsState, otherState);


	//we cant call switchNameHandler in a different file and different class
	const switchNameHandler = () => {		
		setPersonsState({
			persons: [
				{ name: 'Maximilian', age: 28},
				{ name: 'Manu', age: 29},
				{ name: 'Stephanie', age: 27}
			],
			otherState: personsState.otherState
		});
	};
/*
self-closing tag

 */
  	return (
	      <div className="App">
	        <h1>Hi, I am a react App</h1>
	        <p>This is really working!</p>
	        <button onClick={switchNameHandler}>Switch Name</button>
	        <Person 
	        	name={personsState.persons[0].name} 
	        	age={personsState.persons[0].age}
	        />
	        <Person 
	        	name={personsState.persons[1].name} 
	        	age={personsState.persons[1].age}
	        >
	        	My hobbies: racing
	        </Person>
	        <Person
	        	name={personsState.persons[2].name} 
	        	age={personsState.persons[2].age}
	        />
	      </div>
    );
  };

export default App;