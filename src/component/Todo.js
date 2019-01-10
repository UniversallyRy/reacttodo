import React from 'react';
import {ListGroupItem, Input, Label, ButtonGroup, Button} from 'reactstrap';

const Todo = (props) => {

  return (
  <ListGroupItem 
    className="todo-li"
    
    >
    <ButtonGroup 
      className='btn btn-group-toggle'
      data-toggle="buttons"
    >
      <Label className=' btn-secondary'>
        <Input type='checkbox' checked={props.isCompleted} onChange={() => props.toggleCompleted(props['data-id'])} />Checked
      </Label>  
    </ButtonGroup>
    {' '}
    {props.textContent}
    {' '}
    <Button onClick={() => props.deleteTodo(props.id)} className='btn-lg' color='danger' id={props.id}>Delete Todo</Button>
  </ListGroupItem>);
}

export default Todo;