import { createStore } from 'redux';
import todoApp from './reducers';
import {addTodo, completeTodo, setVisibilityFilter} from './actions';
let store = createStore(todoApp);

console.log(store.getState());

