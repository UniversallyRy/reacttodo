import React, { Component } from 'react';
import Todo from './Todo.js';
import {Paper, List} from '@material-ui/core/';

        // Need to input the Todo along with the edit and delete buttons
        // Todo
            // Edit
            // Delete

class TodoContent extends Component {   


    render(props){
        return(
            <Paper style={{margin: 50}}>
                <List style={{}}>
                    {this.props.todos.map( (todo, i) => (
                        <Todo 
                            key={todo.id}
                            data-id={i}
                            id={todo.id}
                            textContent={todo.task}
                            deleteTodo={this.props.deleteTodo}
                            isCompleted={todo.isCompleted}
                            toggleCompleted={this.props.toggleCompleted}
                        />
                     ))}                     
                </List>
            </Paper>
        );
    }
}

export default TodoContent;