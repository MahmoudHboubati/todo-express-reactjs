import { addPending, addSuccess, addError } from '../../actions/Todo/add';

//todo: get this settings from configurations
const TODO_SERVER = "http://localhost:3100";
const TODO_API = "/api/todo";

function add(add) {
    return dispatch => {
        dispatch(addPending(add));
        fetch(TODO_SERVER + TODO_API,
            {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow',
                body: JSON.stringify(add)
            })
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(addSuccess(res));
                return res;
            })
            .catch(error => {
                dispatch(addError(error));
            });
    }
};

export default add;