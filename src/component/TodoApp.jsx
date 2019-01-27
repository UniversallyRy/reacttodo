import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './FormContent';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import ClearButton from './ClearSelected'
import { List } from '@material-ui/core/';
import Filters from './Filters.jsx'

// Component for the todo portion of the app.
export default class TodoApp extends Component {
    static propTypes = {
        items: PropTypes.array.isRequired,
        handleAddTodo: PropTypes.func.isRequired,
        handleDeleteTodo: PropTypes.func.isRequired,
        handleTodoToggle: PropTypes.func.isRequired,
        handleSelectEditTodo: PropTypes.func.isRequired,
        handleSaveEdit: PropTypes.func.isRequired,
        handleEditCancel: PropTypes.func.isRequired,
        handleClearChecked: PropTypes.func.isRequired,
        editingTodo: PropTypes.shape({
            task: PropTypes.string,
            id: PropTypes.string,
            isCompleted: PropTypes.bool,
        }),
    };

    static defaultProps = {
        editingTodo: {},
    }
    render() {

        return (
            <div className="todoApp" style={{marginBottom: '55px'}}>
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
                    <div className='todoList'>
                        {this.props.items.map((item) => (
                            <div key={item.id}>
                                {
                                    this.props.editingTodo.id === item.id ? (
                                        <TodoForm
                                            item={this.props.editingTodo}
                                            handleSaveEdit={this.props.handleSaveEdit}
                                            handleEditCancel={this.props.handleEditCancel}
                                        />)
                                        :
                                        (<TodoItem
                                            item={item}
                                            handleDeleteTodo={this.props.handleDeleteTodo}
                                            handleSelectEditTodo={this.props.handleSelectEditTodo}
                                            handleTodoToggle={this.props.handleTodoToggle}
                                        />)
                                }
                            </div>
                        ))
                        }
                    </div>
                </List>
            </div>
        )
    }
}