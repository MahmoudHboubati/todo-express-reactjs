import { todoListReducer } from './load';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    todos: todoListReducer
});

export default allReducers;