import React, { Component } from 'react';
import './App.css';
import {Navbar, ModalFooter} from 'reactstrap';
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

class App extends Component {
  render(props) {
    return (
      <div className="App">
        <Navbar >TodoApp</Navbar>
        {/* Where the rest of the app goes */}
        <Content  />
        <ModalFooter className='footer'>This is the Footer</ModalFooter>
      </div>

    );
  }
}

export default App;
