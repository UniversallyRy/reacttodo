import React from 'react';
import { BottomNavigation, ListItemText } from '@material-ui/core/';

const styles = {
    textAlign: 'center',
    backgroundColor: 'grey',
    color: 'black',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    borderTop: "1px solid #E7E7E7",
    padding: "10px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "50px",
    width: "100%",
};

const Footer = () => {
  return (
    <BottomNavigation style={styles}>
      <ListItemText style={{fontSize: '20px'}}>Created with React, Redux and material-ui</ListItemText>
    </BottomNavigation>
  )
}

export default Footer
