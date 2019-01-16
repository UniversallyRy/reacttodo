import React from 'react';
import { Button } from '@material-ui/core/';
import { DeleteForeverTwoTone, EditTwoTone } from '@material-ui/icons/';


const TodoItem = props => (

    <div className="todoButtons">
        <Button
            variant='contained'
            style={{ marginRight: '10px' }}
        >
            <EditTwoTone
                onClick={() => props.handleSelectEditTodo(props.id)}
                style={{ fontSize: 25 }}
            />
        </Button>
        <Button
            variant='contained'>
            <DeleteForeverTwoTone
                style={{ marginLeft: '0', fontSize: 25 }}
                variant='contained'
                color='inherit'
                onClick={() => props.handleDeleteTodo(props.id)}
            />
        </Button>
    </div>
)

export default TodoItem;
