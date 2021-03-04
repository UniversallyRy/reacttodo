import React, { useState } from "react";
import PropTypes from "prop-types";
import Add from "@material-ui/icons/Add";
import { FilledInput, FormGroup, Button } from "@material-ui/core/";

// Form component for user input.
const FormContent = ({ handleAddTodo }) => {
  const [state, setstate] = useState({ task: "" });

  const handleChange = (e) => {
    setstate({ task: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const truncatedTask =
      state.task.length >= 50 ? state.task.slice(0, 50) + "..." : state.task;
    handleAddTodo(truncatedTask);
    setstate({ task: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="formContent">
      <div>
        <FormGroup>
          <label htmlFor="task"></label>
          <FilledInput
            style={{
              width: "450px",
              margin: "0 auto",
              backgroundColor: "grey",
            }}
            value={state.task}
            onChange={handleChange}
            id="newTaskInput"
            placeholder="...Enter A Todo"
            required
          />
        </FormGroup>
        <div>
          <Button
            type="submit"
            margin="normal"
            id="submitButton"
            color="inherit"
          >
            <Add style={{ marginRight: "4px" }} /> Add Todo
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FormContent;
