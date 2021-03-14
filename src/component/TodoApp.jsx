import React from "react";
import PropTypes from "prop-types";
import Form from "./FormContent";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import ClearButton from "./ClearSelected";
import { List } from "@material-ui/core/";
import Filters from "./Filters";

// Component for the todo portion of the app.
const TodoApp = ({
  handleAddTodo,
  handleClearChecked,
  items,
  handleDeleteTodo,
  handleTodoToggle,
  handleSelectEditTodo,
  handleSaveEdit,
  handleEditCancel,
  editingTodo,
}) => {
  const propTypes = {
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

  const defaultProps = {
    editingTodo: {},
  };

  return (
    <div className="todoApp" style={{ marginBottom: "55px" }}>
      <div>
        <Form handleAddTodo={handleAddTodo} />
      </div>
      <List style={{ width: "800px", margin: "0 auto" }}>
        <div style={{ alignSelf: "center" }}>
          <Filters />
          <ClearButton handleClearChecked={handleClearChecked} items={items} />
        </div>
        <div className="todoList">
          {items.map((item) => (
            <div key={item.id}>
              {editingTodo.id === item.id ? (
                <TodoForm
                  item={editingTodo}
                  handleSaveEdit={handleSaveEdit}
                  handleEditCancel={handleEditCancel}
                />
              ) : (
                <TodoItem
                  item={item}
                  handleDeleteTodo={handleDeleteTodo}
                  handleSelectEditTodo={handleSelectEditTodo}
                  handleTodoToggle={handleTodoToggle}
                />
              )}
            </div>
          ))}
        </div>
      </List>
    </div>
  );
};

export default TodoApp;
