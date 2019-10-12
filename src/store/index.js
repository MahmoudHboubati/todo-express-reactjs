import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
import { initialState } from '../reducers/Todo/load';
import { initialState as addTodoInitialState } from '../reducers/Todo/addReducer';

const middleware = [thunk];

const store = createStore(rootReducer, {
    todos: initialState,
    addTodo: addTodoInitialState
}, applyMiddleware(...middleware));

export default store;