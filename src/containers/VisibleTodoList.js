import * as React from 'react';
import * as AllComponents from '../components';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions/actions';
import { connect } from 'react-redux';

function filterTodoList(todos, filter) {
	switch (filter) {
		case VisibilityFilters.SHOW_ALL:
			return todos
		case VisibilityFilters.SHOW_COMPLETED:
			return todos.filter(todo => todo.completed)
		case VisibilityFilters.SHOW_ACTIVE:
			return todos.filter(todo => !todo.completed)
	}
}

const mapStateToProps = (state)=>{
   return {
     todos: filterTodoList(state.todos.present, state.visibilityFilter)
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
     onTodoClick: index => {
       dispatch(completeTodo(index));
     }
   };
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllComponents.TodoList);

export default VisibleTodoList;
