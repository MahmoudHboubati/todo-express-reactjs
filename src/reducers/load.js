import { FETCH_TODOLIST_PENDING, FETCH_TODOLIST_SUCCESS, FETCH_TODOLIST_ERROR } from '../actions';

const initialState = {
    pending: false,
    TODOLIST: [],
    error: null
}

export function todoListReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TODOLIST_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_TODOLIST_SUCCESS:
            return {
                ...state,
                pending: false,
                TODOLIST: action.payload
            }
        case FETCH_TODOLIST_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

export const getTodoList = state => state.TodoList;
export const getTodoListPending = state => state.pending;
export const getTodoListError = state => state.error;