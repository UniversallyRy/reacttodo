import React, { Component } from 'react';
import Form from './FormContent';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import ClearButton from './ClearSelected'
import { List } from '@material-ui/core/';
import Filters from './Filters'

export default class TodoApp extends Component {
    static defaultProps = {
        editingTodo: {},
    }
    render() {

        return (
            <div>
                <div>
                    <Form handleAddTodo={this.props.handleAddTodo} />
                </div>
                <List style={{ width: '800px', margin: '0 auto' }}>
                    <div style={{ height: '75px' }}>
                        <Filters />
                        <ClearButton
                            handleClearChecked={this.props.handleClearChecked}
                            items={this.props.items}
                        />
                    </div>
                    {this.props.items.map((item) => (
                        <div key={item.id}>
                            {
                                this.props.editingTodo.id === item.id ? (
                                    <TodoForm
                                        item={this.props.editingTodo}
                                        handleSaveEdit={this.props.handleSaveEdit}
                                        handleEditCancel={this.props.handleEditCancel}
                                    />
                                ) : (
                                        <TodoItem
                                            item={item}
                                            handleDeleteTodo={this.props.handleDeleteTodo}
                                            handleSelectEditTodo={this.props.handleSelectEditTodo}
                                            handleTodoToggle={this.props.handleTodoToggle}
                                        />
                                    )
                            }
                        </div>

                    ))
                    }
                </List>
            </div>
        )
    }
}