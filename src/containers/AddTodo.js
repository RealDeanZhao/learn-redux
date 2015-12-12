import * as React from 'react';
import { addTodo } from '../actions/actions';
import { connect } from 'react-redux';

let AddTodo = ({dispatch})=>{
	let input;
	return (
		<div>
			<input
				type='text'
				ref = {node => {input = node}} />
			<button onClick={()=>{
					if (!input.value) {
						return;
					}
					if (input.value.trim() === '') {
						return;
					}
					dispatch(addTodo(input.value));
					input.value = '';
					input.focus();
				}}>
				Add
			</button>
		</div>
	);
};
AddTodo = connect()(AddTodo);
export default AddTodo;
