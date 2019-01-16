import React, { Component } from 'react';
import { ListItem, FormHelperText, FormGroup, OutlinedInput, Button } from '@material-ui/core/';


class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoVal: props.item.task,
        }
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
        this.props.handleSaveEdit({
            ...this.props.item,
            value: this.state.todoVal,
        });

        return this.setState({ todoVal: '' });
    };

    // Add proptypes this way
    // Home.proptypes = {
    //     actions: PropTypes.object.isRequired,
    //     dispatch: PropTypes.func.isRequired,
    //     movies: PropTypes.array.isRequired,
    //     isFetching: PropTypes.bool.isRequired,
    //     errorMessage: PropTypes.string
    //   };


    render() {
        return (
            <ListItem
                key={this.props.todoVal}
                className='todoForm'
                style={{ margin: '10px', backgroundColor: 'lightgrey' }}
            >
                <div className='editedTodo'>
                    <form onSubmit={this.handleEditAndResetForm}>
                        <FormGroup>
                            <FormHelperText>Edit item or Cancel</FormHelperText>
                            <OutlinedInput
                                labelWidth={10}
                                size='50'
                                type='text'
                                style={{ margin: '0 auto' }}
                                name='edit-item'
                                value={this.state.todoVal}
                                onChange={this.handleChange}
                                id='editedTodo'
                                autoFocus
                                required
                            />
                        </FormGroup>
                        {' '}
                        <div className='ui two bottom attached buttons'>
                            <Button
                                type='submit'
                                className='todoFomSubmit'
                                disabled={!this.state.todoVal}
                            >
                                submit Text
                        </Button>
                            <Button style={{ marginLeft: '0', fontSize: 12 }}
                                className='todoFormCancel'
                                onClick={this.props.handleEditCancel}

                            >
                                Cancel
                        </Button>
                        </div>
                    </form>
                </div>
            </ListItem >
        )
    }
};



export default TodoForm;