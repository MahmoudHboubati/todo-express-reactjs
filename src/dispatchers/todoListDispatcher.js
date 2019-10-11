import { fetchTodoListPending, fetchTodoListSuccess, fetchTodoListError } from '../actions';

//todo: get this settings from configurations
const TODO_SERVER = "http://localhost:3100";
const TODO_API = "/api/todo";

function fetchTodoList() {

    return dispatch => {
        dispatch(fetchTodoListPending());
        fetch(TODO_SERVER + TODO_API)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchTodoListSuccess(res.data));
                return res.data;
            })
            .catch(error => {
                dispatch(fetchTodoListError(error));
            });
    }
};

export default fetchTodoList;