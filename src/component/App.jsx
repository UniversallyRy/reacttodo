import React from 'react';
import './App.css';
import { AppBar, Popper } from '@material-ui/core/';
import VisibleTodoList from '../containers/VisibleTodoList'

// Component wrapper for the whole app.
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




const AppLayout = props => (

    <div className="App">
        <AppBar className='appBar' style={{ backgroundColor: 'grey', color: 'black' }}> TodoApp </AppBar>
        <VisibleTodoList {...props} />
        <Popper className='footer' open={true} style={styles}>Made with React, Redux and material-ui.</Popper>
    </div>
)

export default AppLayout;
