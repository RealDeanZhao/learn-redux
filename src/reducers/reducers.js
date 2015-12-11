import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/actions';
const { SHOW_ALL } = VisibilityFilters;

const todos = (state = [], action)=> {
	switch (action.type) {
		case ADD_TODO:
			return [
				...state,
				{
					text: action.text,
					completed: false
				}
			];
		case COMPLETE_TODO:
			return [
				...state.slice(0, action.index),
				Object.assign({}, state[action.index], { completed: !state[action.index].completed }),
				...state.slice(action.index + 1)
			];
		default:
			return state;
	}
	return state;
}

const visibilityFilter = (state = SHOW_ALL, action) => {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter;
		default:
			return state;
	}
}

const todoApp = combineReducers({
	visibilityFilter,
	todos
});

export default todoApp;
