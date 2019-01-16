import React, { Component } from 'react';
import TodoButtons from './TodoButtons.jsx'
import { ListItem, Checkbox, ListItemText } from '@material-ui/core/';


export default class TodoItem extends Component {
    state = {
        displayButtons: false
    }

    setDisplayButtons = bool => {
        if (this.state.displayButtons !== bool) {
            this.setState({ displayButtons: bool });
        }
    };

    render() {
        return (
            <ListItem
                onMouseEnter={() => this.setDisplayButtons(true)}
                onMouseLeave={() => this.setDisplayButtons(false)}
                id={this.props.item.id}
                key={this.props.item.id}
                style={{ margin: '10px', backgroundColor: 'lightgrey' }}
                className="item-li">
                <Checkbox
                    style={{ backgroundColor: 'rgb(141, 44, 44)' }}
                    color="default" checked={this.props.item.isCompleted}
                    onChange={() => this.props.handleTodoToggle(this.props.item.id)} />
                {' '}
                <ListItemText
                    size='50'
                    primary={this.props.item.task}
                    style={{
                        textDecoration: this.props.item.isCompleted ? 'line-through' : 'none',
                        opacity: this.props.item.isCompleted ? '.3' : '1',
                    }}
                />
                {' '}
                {(this.state.displayButtons === true) ?
                    <TodoButtons
                        id={this.props.item.id}
                        handleDeleteTodo={this.props.handleDeleteTodo}
                        handleSelectEditTodo={this.props.handleSelectEditTodo}
                    />
                    : null
                }
            </ListItem>
        )
    }
};

