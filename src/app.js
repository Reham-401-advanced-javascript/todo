import React from 'react';

import ToDo from './components/todo/todo.js';
import Header from './components/todo/header.js';


export default function App (props)  {

  return (
    <>
      <Header/>
      <ToDo />
    </>
  );
  
}
