import React,{ Component } from 'react';
import {Button} from 'reactstrap';

class ClearButtons extends Component {


   someOrAll = (props) => {
     const someSelected = this.props.todos.filter(todo => todo.isCompleted === true );
     console.log(someSelected.length === 0);
     if(someSelected.length >= 1) {
      return(
        <Button 
        onClick={() => this.props.clearSelected()} 
        className='btn-lg' color='danger' 
        id={'clearButton'}
      >
          Delete Selected Todos
      </Button>
      )
     }else 
       return ;
     
  }

   clearAll = (props) => {
    return(
      <Button 
      onClick={() => this.props.clearSelected()} 
      className='btn-lg' color='danger' 
      id={'clearButton'}
    >
        Delete Selected Todos
    </Button>
    )
  }
  
 render(props){ 
   return(
     <div>
    {this.someOrAll()}
     </div>
    )
}

}

export default ClearButtons;