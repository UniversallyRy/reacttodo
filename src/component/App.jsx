import React from 'react';
import './App.css';
import {AppBar, BottomNavigation} from '@material-ui/core/';
import Form from './FormContent.jsx';
import TodoContent from './TodoContent.jsx';

//               Component Structure
//Header
//App content container
    // input container
        // input
        // button
    // todo container
        // Todo/value from input
        // edit todo button
        // toggle check todo button
        // delete todo button
//Footer
const styles = {
    background: '#6cf',
    position: 'absolute',
    bottom: 0,
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 60,
    width: '100%',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  };


const App = () => (
  
      <div className="App">
        <AppBar> TodoApp </AppBar>
        {/* Where the rest of the app goes */}
        <Form />
         {/* <ClearButtons /> */}
        <TodoContent />
        <BottomNavigation style={styles}>This is the Footer</BottomNavigation>
      </div>
)

export default App;
