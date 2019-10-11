import { fetchTodoListPending, fetchTodoListSuccess, fetchTodoListError } from '../actions';

//todo: get this settings from configurations
const TODO_SERVER = "http://localhost:3100";
const TODO_API = "/api/todo";

function fetchTodoList() {

    return dispatch => {
        console.log('fetching');

        dispatch(fetchTodoListPending());

        console.log('calling', TODO_SERVER + TODO_API);

        fetch(TODO_SERVER + TODO_API)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    throw (res.error);
                }
                dispatch(fetchTodoListSuccess(res.TodoList));
                return res.TodoList;
            })
            .catch(error => {
                dispatch(fetchTodoListError(error));
            });
    }
};

export default fetchTodoList;