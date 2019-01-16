import React, { Component } from 'react';
import Add from '@material-ui/icons/Add';
import { FilledInput, FormGroup, Button } from '@material-ui/core/';


export default class FormContent extends Component {
    constructor() {
        super();
        this.state = {
            task: ''
        };
    }

    handleChange = (e) => {
        this.setState({ task: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const truncatedTask = (this.state.task.length >= 50)
            ? this.state.task.slice(0, 50) + '...'
            : this.state.task;
        this.props.handleAddTodo(truncatedTask);
        this.setState({ task: "" });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='formContent'>
                <div>
                    <FormGroup>
                        <label htmlFor='task'></label>
                        <FilledInput
                            style={{ margin: '0 auto', backgroundColor: 'grey' }}
                            value={this.state.task}
                            onChange={this.handleChange}
                            id='task'
                            placeholder='...Enter a item'
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
                            Add item
                        </Button>
                    </div>
                </div>
            </form>
        )
    }
}