import React from 'react';

import ToDo from './components/todo/todo.js';
import Header from './components/todo/header.js';
import LoginContext from './components/contex/auth.js';
import Login from './components/todo/auth/logIn.js';
import SignUp from './components/todo/auth/SignUp.js';
import Auth from './components/todo/auth/auth.js';


export default function App (props)  {

  return (
    <>
      <LoginContext>
        <Header/>
        <Login />
        <SignUp />
        <Auth capability="read">
          
          <ToDo />
        </Auth>
      </LoginContext>
    </>
  );
  
}
