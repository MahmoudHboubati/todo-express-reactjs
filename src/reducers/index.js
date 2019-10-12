import { todoListReducer } from './Todo/load';
import { combineReducers } from 'redux';
import { addTodoReducer } from './Todo/addReducer';

const allReducers = combineReducers({
    todos: todoListReducer,
    addTodo: addTodoReducer
});

export default allReducers;