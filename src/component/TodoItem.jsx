import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoButtons from "./TodoButtons.jsx";
import { ListItem, Checkbox, ListItemText } from "@material-ui/core/";

// Component that renders todo text from user input.
const TodoItem = ({
  item,
  handleTodoToggle,
  handleDeleteTodo,
  handleSelectEditTodo,
}) => {
  const propTypes = {
    item: PropTypes.object.isRequired,
    handleTodoToggle: PropTypes.func.isRequired,
    handleDeleteTodo: PropTypes.func.isRequired,
    handleSelectEditTodo: PropTypes.func.isRequired,
  };

  const [state, setstate] = useState({
    displayButtons: false,
  });

  const setDisplayButtons = (bool) => {
    if (state.displayButtons !== bool) {
      setstate({ displayButtons: bool });
    }
  };

  return (
    <ListItem
      onMouseEnter={() => setDisplayButtons(true)}
      onMouseLeave={() => setDisplayButtons(false)}
      id={item.id}
      key={item.id}
      style={{
        margin: "15px",
        backgroundColor: "lightgrey",
        borderRadius: "5px",
      }}
      className="item-li"
    >
      <Checkbox
        onChange={() => handleTodoToggle(item.id)}
        id="todoCheckbox"
        style={{ backgroundColor: "rgb(141, 44, 44)", marginRight: 10 }}
        color="default"
        checked={item.isCompleted}
      />{" "}
      <ListItemText
        primary={item.task}
        style={{
          textDecoration: item.isCompleted ? "line-through" : "none",
          opacity: item.isCompleted ? ".3" : "1",
        }}
      />{" "}
      {state.displayButtons === true ? (
        <TodoButtons
          id={item.id}
          handleDeleteTodo={handleDeleteTodo}
          handleSelectEditTodo={handleSelectEditTodo}
        />
      ) : null}
    </ListItem>
  );
};

export default TodoItem;
