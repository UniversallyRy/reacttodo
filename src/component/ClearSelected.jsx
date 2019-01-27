import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

// Clear Button that pops up when a todo is toggled to completed.
const ClearButtonProps = {
  items: PropTypes.array.isRequired,
  handleClearChecked: PropTypes.func.isRequired,
};

class ClearButton extends Component {

  someOrAll = () => {
    const someSelected = this.props.items.filter(item => item.isCompleted === true);

    if (someSelected.length >= 1) {
      return (
        <Button
          className='clearButton'
          style={{ marginLeft: '10px', backgroundColor: 'lightgrey' }}
          variant='contained'
          color='inherit'
          onClick={() => this.props.handleClearChecked(true)}
          id='clearButton'
        >
          Delete Selected todo/s
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

ClearButton.propTypes = ClearButtonProps;

export default ClearButton;