import {VisibilityFilters} from '../actions';
import {SET_VISIBILITY_FILTER, ADD_TODO, COMPLETE_TODO} from './actions';
import {combineReducers} from 'redux';
const SHOW_ALL = VisibilityFilters.SHOW_ALL;
const SHOW_COMPLETE = VisibilityFilters.SHOW_COMPLETE;
const SHOW_ACTIVE = VisibilityFilters.SHOW_ACTIVE;

const initialState = {
	visibilityFilter: VisibilityFilters.SHOW_ALL,
	todos: []
}

const todoApp = combineReducers({
	visibilityFilter,
	todos
});

export default todoApp;

function todos(state = [], action) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return Object.assign({}, state, {
				visibilityFilter: action.filter
			});
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
				Object.assign({}, state[action.index], { completed: true }),
				...state.slice(action.index + 1)
			];
		default:
			return state;
	}
	return state;
}

function visibilityFilter(state = SHOW_ALL, action) {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter;
		default:
			return state;
	}
}