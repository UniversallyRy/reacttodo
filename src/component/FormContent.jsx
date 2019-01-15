import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodo } from "../actions/index";
import { Button, FilledInput, FormGroup } from '@material-ui/core/';
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
        const truncatedTask = (this.state.task.length >= 50)
            ? this.state.task.slice(0, 50) + '...'
            : this.state.task;
        this.props.addTodo(truncatedTask);
        this.setState({ task: "" });
    };

    render() {
        const { task } = this.state;
        return (
            <form onSubmit={this.handleSubmit} className='formContent'>
                <FormGroup>
                    <label htmlFor='task'></label>
                    <FilledInput
                        style={{ margin: '0 auto', backgroundColor: 'grey' }}
                        value={task}
                        onChange={this.handleChange}
                        id='task'
                        placeholder='...Enter a Todo'
                        required
                    />
                </FormGroup>
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