import React from 'react';
import './App.css';
import {AppBar} from '@material-ui/core/';
import VisibleTodoList from '../containers/VisibleTodoList'
import Footer from './Footer'

const AppLayout = props => (

    <div className="App">
        <AppBar className='appBar' style={{ backgroundColor: 'grey', color: 'black' }}> TodoApp </AppBar>
        <VisibleTodoList {...props} />
        <Footer />
    </div>
)

export default AppLayout;
