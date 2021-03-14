import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

// Clear Button that pops up when a todo is toggled to completed.
const ClearButtonProps = {
  items: PropTypes.array.isRequired,
  handleClearChecked: PropTypes.func.isRequired,
};

const ClearButton = ({ items, handleClearChecked }) => {
  const someOrAll = () => {
    const someSelected = items.filter((item) => item.isCompleted === true);

    if (someSelected.length >= 1) {
      return (
        <Button
          className="clearButton"
          style={{ marginLeft: "10px", backgroundColor: "lightgrey" }}
          variant="contained"
          color="inherit"
          onClick={() => handleClearChecked(true)}
          id="clearButton"
        >
          Delete Selected Todo/s
        </Button>
      );
    } else {
      return;
    }
  };

  return <div>{someOrAll()}</div>;
};

ClearButton.propTypes = ClearButtonProps;

export default ClearButton;
