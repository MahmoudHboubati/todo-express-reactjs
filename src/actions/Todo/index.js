export const FETCH_TODOLIST_PENDING = 'FETCH_TODOLIST_PENDING';
export const FETCH_TODOLIST_SUCCESS = 'FETCH_TODOLIST_SUCCESS';
export const FETCH_TODOLIST_ERROR = 'FETCH_TODOLIST_ERROR';

export function fetchTodoListPending() {
    return {
        type: FETCH_TODOLIST_PENDING
    }
}

export function fetchTodoListSuccess(todoList) {
    return {
        type: FETCH_TODOLIST_SUCCESS,
        todos: todoList
    }
}

export function fetchTodoListError(error) {
    return {
        type: FETCH_TODOLIST_ERROR,
        error: error
    }
}