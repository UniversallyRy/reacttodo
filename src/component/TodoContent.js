import React, { Component } from 'react';
import {Card, ListGroup} from 'reactstrap';
import Todo from './Todo.js';

        // Need to input the Todo along with the edit and delete buttons
        // Todo
            // Edit
            // Delete

class TodoContent extends Component {   


    render(props){
        return(
            <Card>
                <ListGroup>
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
                     ))
                    }                     
                </ListGroup>
            </Card>
        );
    }
}

export default TodoContent;