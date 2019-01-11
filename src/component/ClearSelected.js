import React,{ Component } from 'react';
import Button from '@material-ui/core/Button';

class ClearButtons extends Component {


   someOrAll = (props) => {
     const someSelected = this.props.todos.filter(todo => todo.isCompleted === true );
     if(someSelected.length >= 1) {
      return(
        <Button 
        variant='contained'
        color='primary'
        onClick={() => this.props.clearSelected()}  
        id={'clearButton'}
      >
          Delete Selected Todos
      </Button>
      )
     }else 
       return ;
     
  }

  //  clearAll = (props) => {
  //   return(
  //     <Button 
  //     onClick={() => this.props.clearSelected()} 
  //     className='btn-lg' color='danger' 
  //     id={'clearButton'}
  //   >
  //       Delete Selected Todos
  //   </Button>
  //   )
  // }
  
 render(props){ 
   return(
     <div>
    {this.someOrAll()}
     </div>
    )
}

}

export default ClearButtons;