import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core/";
import { DeleteForeverTwoTone, EditTwoTone } from "@material-ui/icons/";

//component to delete and edit todos
const TodoItemPropTypes = {
  handleSelectEditTodo: PropTypes.func.isRequired,
  handleDeleteTodo: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

const TodoItem = ({ handleSelectEditTodo, handleDeleteTodo, id }) => (
  <div className="todoButtons">
    <Button variant="contained" style={{ marginRight: "10px" }}>
      <EditTwoTone
        className="editButton"
        onClick={() => handleSelectEditTodo(id)}
        style={{ fontSize: 25 }}
      />
    </Button>
    <Button variant="contained">
      <DeleteForeverTwoTone
        className="deleteButton"
        style={{ marginLeft: "0", fontSize: 25 }}
        variant="contained"
        color="inherit"
        onClick={() => handleDeleteTodo(id)}
      />
    </Button>
  </div>
);

TodoItem.propTypes = TodoItemPropTypes;

export default TodoItem;
