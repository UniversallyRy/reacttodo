import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    ListItem,
    FormHelperText,
    FormGroup,
    InputBase,
    Button
} from '@material-ui/core/';
import { CancelTwoTone, CheckBoxTwoTone } from '@material-ui/icons/';

class TodoForm extends Component {
    static propTypes = {
        handleEditCancel: PropTypes.func.isRequired,
        handleSaveEdit: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
    };

    state = {
        todoVal: this.props.item.task,
    }

    componentDidMount = () => window.addEventListener('keyup', this.handleKeyUp);

    handleKeyUp = ev => {
        // Add an event listener to return ESCAPE key input
        if (ev.code === 'Escape') {
            this.props.handleEditCancel(ev);
        }
    };

    handleChange = e => {
        this.setState({ todoVal: e.target.value });
    };

    handleEditAndResetForm = ev => {
        ev.preventDefault();
        // Truncate to prevent access words outside listitem 
        const truncatedTask = (this.state.todoVal.length >= 55)
            ? this.state.todoVal.slice(0, 55) + '...'
            : this.state.todoVal;
        this.props.handleSaveEdit({
            ...this.props.item,
            task: truncatedTask,
        });

        return this.setState({ todoVal: '' });
    };

    render() {
        return (
            <ListItem
                key={this.state.todoVal}
                className='todoForm'
                style={{ margin: '10px', backgroundColor: 'lightgrey', borderRadius: '5px' }}
            >
                <form onSubmit={this.handleEditAndResetForm}>
                    <div className='form-row'
                        style={{ marginLeft: '10px', }}
                    >
                        <FormGroup className='col'>
                            <FormHelperText>Edit Todo or Cancel</FormHelperText>
                            <InputBase
                                style={{ marginBottom: '5px', width: '600px' }}
                                name='edit-item'
                                value={this.state.todoVal}
                                onChange={this.handleChange}
                                id='editedTodo'
                                autoFocus
                                required
                            />
                        </FormGroup>
                        {' '}
                        <div style={{}} className='col-auto'>
                            <Button
                                style={{ marginRight: '10px' }}
                                variant='contained'
                                type='submit'
                                className='todoFomSubmit'
                                disabled={!this.state.todoVal}
                            >
                                <CheckBoxTwoTone
                                    style={{ marginLeft: '0', fontSize: 25 }}
                                    color='inherit'
                                />
                            </Button>
                            <Button
                                variant='contained'
                                className='todoFormCancel'
                                onClick={this.props.handleEditCancel}

                            >
                                <CancelTwoTone
                                    style={{ marginLeft: '0', fontSize: 25 }}
                                    color='inherit'
                                />
                            </Button>
                        </div>
                    </div>
                </form>
            </ListItem >
        )
    }
};

export default TodoForm;