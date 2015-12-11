import * as React from 'react';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions/actions';
import todoApp from '../reducers/reducers';
import { connect } from 'react-redux';

let AddTodo = ({dispatch})=>{
	let input;
	return (
		<div>
			<input
				type='text'
				ref = {node => {input = node}} />
			<button onClick={()=>{
					dispatch(addTodo(input.value));
					input.value = '';
				}}>
				Add
			</button>
		</div>
	);
};
AddTodo = connect()(AddTodo);
export default AddTodo;
