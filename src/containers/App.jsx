import React, { Component } from 'react'
import { connect } from 'react-redux';
import AppLayout from '../component/App'
import { addTodo, deleteTodo, toggleTodo, clearChecked, editTodo, cancelEdit, returnTodo, LoadStateLocalStorage, SaveStateLocalStorage } from '../actions/index';




class App extends Component {
    componentDidMount = () => this.props.handleLoadStateLocalStorage;
    componentDidUpdate = () => this.props.handleSaveStateLocalStorage(this.props.items);

    handleAddTodo = itemValue => this.props.handleAddTodo(itemValue);
    handleDeleteTodo = selectedItemId => this.props.handleDeleteTodo(selectedItemId);
    handleTodoToggle = modifiedItem => this.props.handleTodoToggle(modifiedItem);
    handleSelectEditTodo = id => this.props.handleSelectEditTodo(id);
    handleSaveEdit = modifiedItem => this.props.handleSaveEdit(modifiedItem);
    handleEditCancel = selectedItemId => this.props.handleEditCancel(selectedItemId);

    render() {
        return <AppLayout {...this.props} />;
    }
}

const mapStateToProps = state => ({
    items: state.todos.items,
    editingTodo: state.todos.editingTodo,
});

const mapDispatchToProps = {
    handleAddTodo: addTodo,
    handleDeleteTodo: deleteTodo,
    handleTodoToggle: toggleTodo,
    handleSelectEditTodo: editTodo,
    handleEditCancel: cancelEdit,
    handleSaveEdit: returnTodo,
    handleClearChecked: clearChecked,
    handleLoadStateLocalStorage: LoadStateLocalStorage,
    handleSaveStateLocalStorage: SaveStateLocalStorage,
};


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);