import React, { useContext } from 'react';

import { PaginationContext }  from '../contex/context';
import '../todo/todo.scss';
function NumOfPageChanging  () {

  const sortion = useContext(PaginationContext);
  const itemNumHandeler = (e) =>{
    sortion.setItem(e.target.value);
  };
  
  return (
    <>
      
      <select className="select" onChange={itemNumHandeler}> 
        <option> #items/page</option>
        <option value='3'>3</option>
        <option value='5'>5</option>
        <option value='7'>7</option>
      </select>
    </>
  );
  
}
export default NumOfPageChanging;