import React from 'react'; 

const UserOutput = (props) => {
	return (
		<div>
			<p> Hello World!</p>
			<p> Hello Sept ~ </p>
			<p> by {props.username}</p>
		</div>
	);

};

export default UserOutput;