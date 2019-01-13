import React, { Component } from 'react';
import { Button } from '@material-ui/core/';
import { DeleteForeverTwoTone, EditTwoTone } from '@material-ui/icons/';


class TodoButtons extends Component {

    render() {
        return (
            <div>
                <Button
                    variant='contained'
                    style={{ marginRight: '10px' }}
                >
                    <EditTwoTone
                        style={{ fontSize: 25 }}

                    />
                </Button>
                <Button
                    variant='contained'>
                    <DeleteForeverTwoTone
                        style={{ marginLeft: '0', fontSize: 25 }}
                        variant='contained'
                        color='inherit'
                        onClick={() => this.props.deleteTodo(this.props.todo)}

                    />
                </Button>
            </div>)
    }
}

export default TodoButtons