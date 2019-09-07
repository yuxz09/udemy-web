import React from 'react'; 


const UserInput = (props) => {
	return (
		<div>
			<input type="text" 
					onChange={props.changed}
					value={props.username} //使得空格一开始是初始化的name
			/>
		</div>
	);

};

export default UserInput;