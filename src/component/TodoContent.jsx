import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from "../actions/index";
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import {Card, ListItem, Checkbox, ListItemText} from '@material-ui/core/';

        // Need to input the Todo along with the edit and delete buttons
        // Todo
            // Edit
            // Delete

function mapStateToProps(state){
    return { todos: state.todos };
};

function mapDispatchToProps(dispatch) {
    return {
        deleteTodo: todos => dispatch(deleteTodo(todos)),
        toggleTodo: todos => dispatch(toggleTodo(todos))       
    };
}

const TodoList = ({ todos, deleteTodo, toggleTodo }) => (   

            <Card style={{width: '800px', margin: '0 auto', backgroundColor:'rgb(141, 44, 44)'}}>
                
                    {todos.map( todo => (
                    <ListItem 
                        key={todo.id} 
                        style={{margin:'10px', backgroundColor: 'lightgrey'}} 
                        className="todo-li">
                    <Checkbox style={{backgroundColor:'rgb(141, 44, 44)'}} color="danger" checked={todo.isCompleted} onChange={() => toggleTodo(todo.id)}/>
                    {' '}
                    <ListItemText 
                        primary ={todo.task}
                        style={{textDecoration: todo.isCompleted ? 'line-through': 'none'}}  
                    />
                    {' '}
                    <DeleteForeverTwoToneIcon 
                    style={{marginRight: '0 auto', fontSize: 35}}
                    variant='contained' 
                    color='danger' 
                    onClick={() => deleteTodo(todo.id)}
                    >
                        Delete Todo
                    </DeleteForeverTwoToneIcon>
                  </ListItem>        
                     ))}                     
                
            </Card>
);

const TodoContent = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoContent;