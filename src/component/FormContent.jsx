import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodo } from "../actions/index";
import { Button, TextField, } from '@material-ui/core/';
import { Add } from '@material-ui/icons/';



function mapDispatchToProps(dispatch) {
    return {
        addTodo: todo => dispatch(addTodo(todo))
    };
}

class FormContent extends Component {
    constructor() {
        super();
        this.state = {
            task: ''
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.task);
        this.setState({ task: "" });
    };

    render() {
        const { task } = this.state;
        return (
            <form onSubmit={this.handleSubmit} className='formContent'>
                <div className='form-group'>
                    <label htmlFor='task'></label>
                    <TextField
                        margin='normal'
                        variant='filled'
                        maxLength={20}
                        value={task}
                        onChange={this.handleChange}
                        id='task'
                        placeholder='...Enter a Todo'
                        aria-label="Enter Todo Here"
                        required
                    />
                </div>
                <div>
                    <Button
                        type='submit'
                        margin='normal'
                        id='submitButton'
                        color='inherit'
                    >
                        <Add style={{ marginRight: '4px' }} />
                        {" "}
                        Add Todo
                    </Button>
                </div>
            </form>
        )
    }
}

const Forms = connect(null, mapDispatchToProps)(FormContent);

export default Forms;