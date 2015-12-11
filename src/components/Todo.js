import * as React from 'react';

const Todo = ({
	onClick,
	text,
	completed
})=>(
	<li
		onClick={onClick}
		style={{
			textDecoration: completed ? 'line-through':'none',
			cursor: completed? 'default':'pointer'
		}}>


		{text}


	</li>
);

Todo.propTypes = {
	onClick: React.PropTypes.func.isRequired,
	text: React.PropTypes.string.isRequired,
	completed: React.PropTypes.bool.isRequired
}

export default Todo;
