export const FETCH_ADD_PENDING = 'FETCH_ADD_PENDING';
export const FETCH_ADD_SUCCESS = 'FETCH_ADD_SUCCESS';
export const FETCH_ADD_ERROR = 'FETCH_ADD_ERROR';

export function addPending() {
    return {
        type: FETCH_ADD_PENDING
    }
}

export function addSuccess(add) {
    return {
        type: FETCH_ADD_SUCCESS,
        todos: add
    }
}

export function addError(error) {
    return {
        type: FETCH_ADD_ERROR,
        error: error
    }
}