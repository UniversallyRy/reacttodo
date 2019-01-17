import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoButtons from './TodoButtons.jsx';
import { ListItem, Checkbox, ListItemText } from '@material-ui/core/';


export default class TodoItem extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
        handleTodoToggle: PropTypes.func.isRequired,
        handleDeleteTodo: PropTypes.func.isRequired,
        handleSelectEditTodo: PropTypes.func.isRequired,
    };

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
                style={{ margin: '10px', backgroundColor: 'lightgrey', borderRadius: '5px' }}
                className="item-li">
                <Checkbox
                    style={{ backgroundColor: 'rgb(141, 44, 44)' }}
                    color="default" checked={this.props.item.isCompleted}
                    onChange={() => this.props.handleTodoToggle(this.props.item.id)}
                />
                {' '}
                <ListItemText
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

