import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  FormHelperText,
  FormGroup,
  InputBase,
  Button,
} from "@material-ui/core/";
import { CancelTwoTone, CheckBoxTwoTone } from "@material-ui/icons/";

// Component rendered when the edit button is clicked.
const TodoForm = ({ item, handleEditCancel, handleSaveEdit }) => {
  const propTypes = {
    handleEditCancel: PropTypes.func.isRequired,
    handleSaveEdit: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
  };

  const [state, setstate] = useState({
    todoVal: item.task,
  });

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const handleKeyUp = (ev) => {
    // Add an event listener to return ESCAPE key input
    if (ev.code === "Escape") {
      handleEditCancel(ev);
    }
  };

  const handleChange = (e) => {
    setstate({ todoVal: e.target.value });
  };

  const handleEditAndResetForm = (ev) => {
    ev.preventDefault();
    // Truncate to prevent access words outside listitem
    const truncatedTask =
      state.todoVal.length >= 55
        ? state.todoVal.slice(0, 55) + "..."
        : state.todoVal;
    handleSaveEdit({
      ...item,
      task: truncatedTask,
    });

    return setstate({ todoVal: "" });
  };

  return (
    <ListItem
      key={state.todoVal}
      className="todoForm"
      style={{
        margin: "10px",
        backgroundColor: "lightgrey",
        borderRadius: "5px",
      }}
    >
      <form onSubmit={handleEditAndResetForm}>
        <div className="form-row" style={{ marginLeft: "10px" }}>
          <FormGroup className="col">
            <FormHelperText>Edit Todo or Cancel</FormHelperText>
            <InputBase
              style={{ marginBottom: "5px", width: "600px" }}
              name="edit-item"
              value={state.todoVal}
              onChange={handleChange}
              id="editedTodo"
              autoFocus
              required
            />
          </FormGroup>{" "}
          <div style={{}} className="col-auto">
            <Button
              style={{ marginRight: "10px" }}
              variant="contained"
              type="submit"
              className="todoFomSubmit"
              disabled={!state.todoVal}
            >
              <CheckBoxTwoTone
                style={{ marginLeft: "0", fontSize: 25 }}
                color="inherit"
              />
            </Button>
            <Button
              variant="contained"
              className="todoFormCancel"
              onClick={handleEditCancel}
            >
              <CancelTwoTone
                style={{ marginLeft: "0", fontSize: 25 }}
                color="inherit"
              />
            </Button>
          </div>
        </div>
      </form>
    </ListItem>
  );
};

export default TodoForm;
