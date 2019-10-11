import { todoListReducer } from './load';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    todoListReducer: todoListReducer
});

export default allReducers;