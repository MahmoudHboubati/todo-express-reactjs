import { FETCH_ADD_PENDING, FETCH_ADD_SUCCESS, FETCH_ADD_ERROR } from '../../actions/Todo/add';

export const initialState = {
    todo: { title: '', description: '', dueDate: new Date() },
    pending: false,
    error: null
}

export function addTodoReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ADD_PENDING:
            return {
                error: null,
                pending: true,
                todo: action.todo
            };
        case FETCH_ADD_SUCCESS:
            return {
                error: null,
                pending: false,
                todo: action.todo
            };
        case FETCH_ADD_ERROR:
            return {
                todo: null,
                pending: false,
                error: action.error
            };
        default:
            return state;
    }
}

export const addTodo = state => state.addTodo.todo;
export const addTodoPending = state => state.addTodo.pending;
export const addTodoError = state => state.addTodo.error;