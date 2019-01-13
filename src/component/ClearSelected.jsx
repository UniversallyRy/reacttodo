import React,{ Component } from 'react';
import { connect } from "react-redux";
import { clearChecked, toggleAll } from "../actions/index";
import Button from '@material-ui/core/Button';

function mapStateToProps(state){
  return { todos: state.todos };
}
function mapDispatchToProps(dispatch) {
  return {
      clearChecked: todos => dispatch(clearChecked(todos)),
      toggleAll: todos => dispatch(toggleAll(todos))     
  };
}

function toggleChecked(prop) {
  if(prop){
    this.props.toggleAll(true);
  }else{
    this.props.toggleAll(false);
  }
}


class ClearButtons extends Component {

   someOrAll = () => {
     const someSelected = this.props.todos.filter(todo => todo.isCompleted === true );

     if(someSelected.length >= 1) {
      return(
        <Button 
          variant='contained'
          color='danger'
          onClick={() => this.props.clearChecked(true)}  
          id={'clearButton'}
      >
          Delete Selected Todos
      </Button>
      )
     }else {
       return(
     <Button 
        variant='contained'
        color='danger'
        onClick={() => toggleChecked(someSelected)}  
        id={'clearButton'}
      >
          Toggle All
      </Button>
       )
     }
  }
  
 render(props){ 
   return(
     <div style={{margin: '0 auto', padding: '120px'}}>
    {this.someOrAll()}
     </div>
    )
}

}

const ClearButton = connect(mapStateToProps, mapDispatchToProps)(ClearButtons);

export default ClearButton;