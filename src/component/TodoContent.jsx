import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from "../actions/index";

import {Paper, List, Button, ListItem, Checkbox, ListItemText} from '@material-ui/core/';

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

            <Paper style={{margin: 50}}>
                <List>
                    {todos.map( todo => (
                    <ListItem 
                        key={todo.id} 
                        style={{margin: 16}} 
                        className="todo-li">
                    <Checkbox onChange={() => toggleTodo(todo.id)}/>
                    {' '}
                    <ListItemText 
                        primary ={todo.task}
                        style={{textDecoration: todo.isCompleted ? 'line-through': 'none'}}  
                    />
                    {' '}
                    <Button 
                    style={{marginRight: 50}}
                    variant='contained' 
                    color='primary' 
                    onClick={() => deleteTodo(todo.id)}
                    >
                        Delete Todo
                    </Button>
                  </ListItem>        
                     ))}                     
                </List>
            </Paper>
);

const TodoContent = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoContent;