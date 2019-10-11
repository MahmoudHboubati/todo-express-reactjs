// import { createStore } from 'redux';
// import allReducers from '../reducers';

// const store = createStore(allReducers);

// export default store;

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

const middlewares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;