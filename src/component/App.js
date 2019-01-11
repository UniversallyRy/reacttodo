import React, { Component } from 'react';
import './App.css';
import {AppBar, BottomNavigation} from '@material-ui/core/';
import Content from './AppContent';

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
    width: 800,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  };


class App extends Component {
  render(props) {
    return (
      <div className="App">
        <AppBar> TodoApp </AppBar>
        {/* Where the rest of the app goes */}
        <Content />
        <BottomNavigation style={styles}>This is the Footer</BottomNavigation>
      </div>

    );
  }
}

export default App;
