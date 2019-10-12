export const FETCH_EDIT_PENDING = 'FETCH_EDIT_PENDING';
export const FETCH_EDIT_SUCCESS = 'FETCH_EDIT_SUCCESS';
export const FETCH_EDIT_ERROR = 'FETCH_EDIT_ERROR';

export function editPending() {
    return {
        type: FETCH_EDIT_PENDING
    }
}

export function editSuccess(edit) {
    return {
        type: FETCH_EDIT_SUCCESS,
        todos: edit
    }
}

export function editError(error) {
    return {
        type: FETCH_EDIT_ERROR,
        error: error
    }
}