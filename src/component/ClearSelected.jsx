import React, { Component } from 'react';
import { connect } from "react-redux";
import { clearChecked } from "../actions/index";
import Button from '@material-ui/core/Button';

function mapStateToProps(state) {
  return { todos: state.todos };
}
function mapDispatchToProps(dispatch) {
  return {
    clearChecked: todos => dispatch(clearChecked(todos)),
  };
}


class ClearButtons extends Component {

  someOrAll = () => {
    const someSelected = this.props.todos.filter(todo => todo.isCompleted === true);

    if (someSelected.length >= 1) {
      return (
        <Button
          variant='contained'
          color='inherit'
          onClick={() => this.props.clearChecked(true)}
          id='clearButton'
        >
          Delete Selected Todos
      </Button>
      )
    } else {
      return


    }
  }

  render() {
    return (
      <div style={{}}>
        {this.someOrAll()}
      </div>
    )
  }

}

const ClearButton = connect(mapStateToProps, mapDispatchToProps)(ClearButtons);

export default ClearButton;