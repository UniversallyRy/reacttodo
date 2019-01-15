import React, { Component } from 'react';
import Form from './FormContent.jsx';
import TodoContent from './TodoContent.jsx';

export default class TodoApp extends Component {
    super = {

    }
    render() {
        return (
            <div className="todoApp">
                <Form />
                <TodoContent />
            </div>
        )
    }
}
