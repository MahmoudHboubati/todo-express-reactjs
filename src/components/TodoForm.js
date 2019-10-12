import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import add from '../dispatchers/Todo/addDispatcher';
import { addTodo, addTodoError, addTodoPending } from '../reducers/Todo/addReducer';

class TodoForm extends Component {

    handleDateChange = date => {
        this.setSelectedDate(date);
    };

    handleAddClick = () => {
        this.props.addTodo({
            title: 'new',
            description: 'new',
            dueDate: new Date()
        });
    };

    setSelectedDate = (date) => {
        console.log(this.state)
        this.setState({ todo: { dueDate: date } });
    }
    selectedDate = () => {
        return new Date();
    }

    render() {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <form noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="title"
                        label="title"
                        name="title"
                        autoComplete="title"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="description"
                        label="description"
                        name="description"
                        autoComplete="description"
                        autoFocus
                        multiline
                        rowsMax="4"
                    />
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        inputVariant="outlined"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="dueDate"
                        label="Due Date"
                        value={this.selectedDate}
                        onChange={this.handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    <Button
                        type="button"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={this.handleAddClick}
                    >
                        Add {JSON.stringify(this.props.todo)}
                </Button>
                </form>
            </MuiPickersUtilsProvider>
        );
    }
}

const mapStateToProps = state => ({
    todo: addTodo(state),
    error: addTodoError(state),
    pending: addTodoPending(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    addTodo: add
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoForm);