import React from 'react';
import {Button, ListItem, Checkbox, ListItemText} from '@material-ui/core/';

const Todo = (props) => {

  return (
  <ListItem style={{margin: 16}} className="todo-li">
        <Checkbox 
          checked={props.isCompleted} 
          onChange={() => props.toggleCompleted(props['data-id'])} 
        />
    {' '}
    <ListItemText primary ={props.textContent} />
    {' '}
    <Button varient='contained' color='primary' onClick={() => props.deleteTodo(props.id)} id={props.id}>Delete Todo</Button>
  </ListItem>);
}

export default Todo;