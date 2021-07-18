import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import AppLayout from "../component/AppLayout";
import {
  addTodo,
  deleteTodo,
  toggleTodo,
  editTodo,
  saveEdit,
  cancelEdit,
  clearChecked,
} from "../actions/index";

// Container for the majority of the Redux state.
const appPropTypes = {
  handleAddTodo: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  handleTodoToggle: PropTypes.func.isRequired,
  handleSelectEditTodo: PropTypes.func.isRequired,
  handleSaveEdit: PropTypes.func.isRequired,
  handleEditCancel: PropTypes.func.isRequired,
  handleClearChecked: PropTypes.func.isRequired,
};

const App = (props) => {
  const handleAddTodo = (itemValue) => props.handleAddTodo(itemValue);
  const handleDeleteTodo = (selectedItemId) =>
    props.handleDeleteTodo(selectedItemId);
  const handleTodoToggle = (modifiedItem) =>
    props.handleTodoToggle(modifiedItem);
  const handleSelectEditTodo = (id) => props.handleSelectEditTodo(id);
  const handleSaveEdit = (modifiedItem) => props.handleSaveEdit(modifiedItem);
  const handleEditCancel = (selectedItemId) =>
    props.handleEditCancel(selectedItemId);
  const handleClearChecked = (selectedItemId) =>
    props.handleClearChecked(selectedItemId);

  return <AppLayout {...props} />;
};

const mapStateToProps = (state) => ({
  items: state.todos.items,
  editingTodo: state.todos.editingTodo,
});

const mapDispatchToProps = {
  handleAddTodo: addTodo,
  handleDeleteTodo: deleteTodo,
  handleTodoToggle: toggleTodo,
  handleSelectEditTodo: editTodo,
  handleSaveEdit: saveEdit,
  handleEditCancel: cancelEdit,
  handleClearChecked: clearChecked,
};

App.propTypes = appPropTypes;

export default connect(mapStateToProps, mapDispatchToProps)(App);
