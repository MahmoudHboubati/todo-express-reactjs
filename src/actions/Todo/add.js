export const FETCH_ADD_PENDING = 'FETCH_ADD_PENDING';
export const FETCH_ADD_SUCCESS = 'FETCH_ADD_SUCCESS';
export const FETCH_ADD_ERROR = 'FETCH_ADD_ERROR';

export function addPending(add) {
    return {
        type: FETCH_ADD_PENDING,
        todo: add
    }
}

export function addSuccess(added) {
    return {
        type: FETCH_ADD_SUCCESS,
        todo: added
    }
}

export function addError(error) {
    return {
        type: FETCH_ADD_ERROR,
        error: error
    }
}