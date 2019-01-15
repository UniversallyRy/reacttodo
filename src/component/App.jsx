import React from 'react';
import './App.css';
import { AppBar, Popper } from '@material-ui/core/';
import TodoApp from './TodoApp';

const styles = {
    textAlign: 'center',
    background: 'grey',
    position: 'absolute',
    bottom: 0,
    borderRadius: 3,
    border: 0,
    color: 'black',
    height: 125,
    width: '100%',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};




const App = () => (

    <div className="App">
        <AppBar style={{ backgroundColor: 'grey', color: 'black' }}> TodoApp </AppBar>
        <TodoApp />
        <Popper open={true} style={styles}>Made with React, Redux and material ui.</Popper>
    </div>
)

export default App;
