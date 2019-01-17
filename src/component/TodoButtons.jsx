import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core/';
import { DeleteForeverTwoTone, EditTwoTone } from '@material-ui/icons/';

const TodoItemPropTypes = {
    handleSelectEditTodo: PropTypes.func.isRequired,
    handleDeleteTodo: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
};

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

TodoItem.propTypes = TodoItemPropTypes;

export default TodoItem;
