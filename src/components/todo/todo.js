// import React from 'react';
import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';
import Pagination from './context.js';
import ToggleHideShow from './hide-show';
import PaginationContext from '../contex/context.js';
import ToggleShowProvider from '../contex/show-hide';
import ChangeNumberOfPages from './itemperpage';
import TodoForm from './form.js';
import TodoList from './list.js';

import './todo.scss';
const url = 'https://lab-32.herokuapp.com/todo';
function ToDo (props) {
  const [list, setList] = useState([]);

  

  const addItem = (item) => {
    item.due = new Date();
    item._id = Math.random();
    item.complete = false;
    setList( [...list, item]);
  };

  const deleteItem= _id=>{
    let item = list.filter(i => i._id === _id)[0] || {};

    // console.log('iiiiiiiiiiiiiid',_id);
    let config={
      url:url,
      method : 'delete',
      data:item,
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
    
    };
    axios.request(config)

      .then(response =>{
        // console.log('kkrrrrrrrrrrrrr',response);

        return response.data;
      } )
      .then((result) => {
        // console.log('kkrrrrrrrrrrrrr',result);
        setList(list.filter(i => i._id !== _id));
          
      })
      .catch(console.error);

    
  };
  const toggleComplete = id => {

    let item = list.filter(i => i._id === id)[0] || {};



    if (item._id) {

      item.complete = !item.complete;


      let config = {
        url:url,
        method : 'put',
        mode: 'cors',
        data: item,
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
      };
      axios.request(config)
        .then(response => response.data)
        .then(savedItem => {
          setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
        })
        .catch(console.error);
    };
  };
  // const deleteItem= _id=>{
  //   const fetchData = async () => {
  //     // console.log('iiiiiiiiiiiiiid',_id);
  //     fetch(url,{

  //       method : 'delete',
  //       body: JSON.stringify({_id}),
  //       mode: 'cors',
  //       cache: 'no-cache',
  //       headers: { 'Content-Type': 'application/json' },
    
  //     })
  //       .then((response) => response.json())
  //       .then((result) => {
  //         // console.log('kkrrrrrrrrrrrrr',result);
  //         setList(list.filter(i => i._id !== _id));
          
  //       })
  //       .catch(console.error);

  //   };
  //   fetchData();
  // };
  // const toggleComplete = _id => {
    
  //   let item = list.filter(i => i._id === _id)[0] || {};
    
  //   if (item._id) {
  //     item.complete = !item.complete;
      
      
  //     const fetchData = async () => {
  //     // console.log('iiiiiiiiiiiiiid',item);
  //       fetch(url,{
  //         method : 'put',
  //         body: JSON.stringify({_id:item._id,complete:item.complete}),
  //         mode: 'cors',
  //         cache: 'no-cache',
  //         headers: { 'Content-Type': 'application/json' },
    
  //       })
  //         .then((response) => response.json())
  //         .then(savedItem => {
  //           // console.log('zzzzzzzzzzzzzzzzzzzzz',savedItem);
  //           setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
  //         })
  //         .catch(console.error);
  //     };
  //     fetchData();
  //   };

  // };
  
  


  // useEffect(() => {
  //   let list = [
  //     { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A'},
  //     { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A'},
  //     { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B'},
  //     { _id: 4, complete: true, text: 'Do Homework', difficulty: 3, assignee: 'Person C'},
  //     { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B'},
  //   ];

  //   setList(list);
  // }, []);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     fetch(url,{
  //       method : 'get',
  //       mode: 'cors',

  //     })
  //       .then((response) => response.json())
  //       .then((result) => {
  //         // console.log('kkkkkkkkkkkkkkkkkkkk',result);
  //         setList(result);
  //       });
  //   };
  //   fetchData();
  // }, []);
  // console.log('aaaaaaaaaaaaaaa',list);
  useEffect(() => {
   
    let config={
      url:url,
      method : 'get',
      mode: 'cors',
    };
    axios.request(config)
      .then(response => response.data)
      .then((result) => {
        // console.log('kkkkkkkkkkkkkkkkkkkk',result);
        setList(result);
      });
    
  }, []);

 
  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
             There are {list.filter(item => !item.complete).length} Items To Complete    </Navbar.Brand>
        </Navbar>
        
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={addItem} />
        </div>
        <PaginationContext list={list}>
          <div className="list">
            <ToggleShowProvider list={list}>
              <ToggleHideShow/>
              <ChangeNumberOfPages/>
              <TodoList
          
                list={list}
                handledelete={deleteItem}
                handleComplete={toggleComplete}
              />
            </ToggleShowProvider>

            <Pagination
              allItem={list.length}
            />
          </div>

        </PaginationContext>
      </section>
    </>
  );
}


export default ToDo;
