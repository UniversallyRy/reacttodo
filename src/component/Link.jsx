import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

// Component for visibility buttons.
const Link = ({ active, children, onClick }) => (
  <Button
    variant="contained"
    onClick={onClick}
    disabled={active}
    style={{ marginLeft: "25px" }}
  >
    {children}
  </Button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
