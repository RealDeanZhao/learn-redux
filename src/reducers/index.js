import { combineReducers } from 'redux';
import undoable, {distinctState} from 'redux-undo';

import visibilityFilter from './visibilityFilter';
import todos from './todos';

const todoApp = combineReducers({
	visibilityFilter,
	todos : undoable(todos, { filter: distinctState() })
});

export default todoApp;
