import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';
import { initialState } from '../reducers/load';

const middleware = [thunk];

const store = createStore(rootReducer, { todos: initialState }, applyMiddleware(...middleware));

export default store;