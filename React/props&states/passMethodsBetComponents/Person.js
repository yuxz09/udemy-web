import React from 'react'; 
//do not need to import component since we do not use a class which extends component
//instead we are creating a function

const person = (props) => {
	return (
		<div>
			<p onClick={props.click}>I am {props.name} and I am {props.age} years old!</p>
			<p>{props.children}</p>
		</div>
	);

};

export default person;


