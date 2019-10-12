import { FETCH_TODOLIST_PENDING, FETCH_TODOLIST_SUCCESS, FETCH_TODOLIST_ERROR } from '../../actions/Todo';

export const initialState = {
    todos: [],
    pending: false,
    error: null
}

export function todoListReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TODOLIST_PENDING:
            return {
                error: null,
                pending: true,
                todos: []
            };
        case FETCH_TODOLIST_SUCCESS:
            return {
                error: null,
                pending: false,
                todos: action.todos
            };
        case FETCH_TODOLIST_ERROR:
            return {
                todos: null,
                pending: false,
                error: action.error
            };
        default:
            return state;
    }
}

export const getTodoList = state => state.todos.todos;
export const getTodoListPending = state => state.todos.pending;
export const getTodoListError = state => state.todos.error;