import * as React from 'react'

const AddTodo = ({
	onAddClick
})=>{
	let input;
	return (
		<div>


			<input
				type='text'
				ref = {node => {input = node}} />


			<button onClick={()=>{
					onAddClick(input.value);
					input.value = '';
				}}>
				Add
			</button>


		</div>
	);
};

AddTodo.propTypes = {
	onAddClick: React.PropTypes.func.isRequired
}

export default AddTodo;
