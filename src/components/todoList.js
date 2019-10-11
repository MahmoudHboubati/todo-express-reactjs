import React, { Component } from 'react'
import fetchTodoList from '../dispatchers/todoListDispatcher';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getTodoListError, getTodoList, getTodoListPending } from '../reducers/load';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] };
    }    

    componentDidMount() {
        console.log('mount');
        this.props.fetchTodoList();
    }

    render() {
        return (
            <div>
                {this.state.todos.map(todo => <div>{todo.title}</div>)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    error: getTodoListError(state),
    todos: getTodoList(state),
    pending: getTodoListPending(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchTodoList: fetchTodoList
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);