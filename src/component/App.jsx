import React from 'react';
import './App.css';
import { AppBar, Popper } from '@material-ui/core/';
import Form from './FormContent.jsx';
import TodoContent from './TodoContent.jsx';
import ClearSelected from './ClearSelected.jsx';

const styles = {
    textAlign: 'right',
    background: 'rgb(141, 44, 44)',
    position: 'absolute',
    bottom: 0,
    borderRadius: 3,
    border: 0,
    color: 'white',
    height:125,
    width: '100%',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};


const App = () => (

    <div className="App">
        <AppBar style={{backgroundColor:'rgb(141, 44, 44)'}}> TodoApp </AppBar>
        {/* Where the rest of the app goes */}
        <Form />
        {/* <ClearButtons /> */}
        <TodoContent />
        <ClearSelected />
        <Popper open={true} style={styles}>This is the Footer</Popper>
    </div>
)

export default App;
