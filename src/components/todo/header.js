import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Login from '../todo/auth/logIn.js';
import SignUp from '../todo/auth/SignUp.js';

function Header (props){
  
  return (
    
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">
        
      Home
      </Navbar.Brand>
      <ul>
        <Login />

      </ul>
      <ul>

        <SignUp />
      </ul>
    </Navbar>

    
  );
  
}

export default Header;