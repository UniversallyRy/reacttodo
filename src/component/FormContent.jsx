import React, { Component } from 'react';
import { connect } from "react-redux";
import { addTodo } from "../actions/index";
import FormInput from './FormInput';



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
        return (
            <form onSubmit={this.handleSubmit} className='formContent'>
                <FormInput
                    task={this.state.task}
                />

            </form>
        )
    }
}

const Forms = connect(null, mapDispatchToProps)(FormContent);

export default Forms;