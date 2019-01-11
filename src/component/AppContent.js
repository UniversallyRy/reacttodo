import React, { Component } from 'react';
import FormContent from './FormContent';
import TodoContent from './TodoContent';
import uuid from 'uuid';
import ClearButtons from './ClearSelected';

const todos = [
    {
      task: 'Make a Todo Item',
      isCompleted: false,
      id: 0,
    },
    {
      task: 'Make Another',
      isCompleted: false,
      id:1,
    },
  ];

export default class Content extends Component {
        constructor(props) {
            super(props);
            this.state = {
                value: '',
                todos: todos,
            };    
        }
  
        inputListener = (e) => {
            this.setState({value: e.target.value});
          }

        addTodo = e => {
            e.preventDefault();
            console.log(this.state.todos)
            // Need to give all todos seperate id's.
            const newTodo = {task: this.state.value, isCompleted: false, id: uuid()};
            this.setState({ todos: [...this.state.todos, newTodo], value: '',
            });
        };
            
        

        deleteTodo = id => {
            console.log(this.state.todos);
            this.setState((prevState) => ({
                todos : prevState.todos.filter(todo => todo.id !== id),
              }));
        };

        toggleCompletedTodo = i => {
            console.log(this.state);
            const newTodos = this.state.todos.slice();
            newTodos[i].isCompleted = !newTodos[i].isCompleted;
            this.setState({todos: newTodos})      
        };

        clearSelected = () => {
            this.setState((prevState) => ({
                todos : prevState.todos.filter(todo => todo.isCompleted !== true),
            }));
        };

        // InputForm
        // Todo
        render(){
            return (
                <div className='AppContent'>
                    <FormContent onSubmit={this.addTodo} handleChange={this.inputListener} value={this.state.value}/>
                    <ClearButtons todos={this.state.todos} clearSelected = {this.clearSelected}/>
                    <TodoContent todos={this.state.todos} deleteTodo={this.deleteTodo} toggleCompleted={this.toggleCompletedTodo}/>
                </div>
            );
        }
}