import React, { Component } from 'react';
import { connect } from "react-redux";
import uuid from "uuid";
import { addTodo } from "../actions/index";
import { Button, TextField} from '@material-ui/core/';

function mapDispatchToProps(dispatch) {
    return {
        addTodo: todo => dispatch(addTodo(todo))
    };
}

class FormContent extends Component {
    constructor() {
        super();
        this.state = {
            task: '',
            isCompleted: false,
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { task, isCompleted } = this.state;
        const id = uuid();
        this.props.addTodo({ task, isCompleted, id  });
        this.setState({task: ""});
    }

    render() {
        // InputForm
        // Todo
        const { task } = this.state;
        return (
            <form onSubmit={this.handleSubmit} className='formContent'>    
                <div className='form-group'>
                <label htmlFor='task'></label>
                <TextField
                    margin='normal'
                    variant='outlined'
                    value={task}
                    onChange={this.handleChange} 
                    id='task' 
                    placeholder='...Enter a Todo' 
                    aria-label="Enter Todo Here" 
                    required
                />
                </div>
                <Button
                    type='submit'
                    margin='normal'
                    id='submitButton' 
                    color='primary' 
                >
                    Add Todo
                </Button>
            </form>
        )
    }
}

    const Form = connect(null, mapDispatchToProps)(FormContent);

export default Form;