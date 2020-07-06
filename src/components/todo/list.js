import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function TodoList (props) {

  // console.log('sssssssssss',props.list);
  return (
    <ul>
      <ListGroup>
      
        {props.list.map((item) => (

          <ListGroup.Item

            variant={item.complete ? 'success' : 'danger'}
            key={item._id}
          >
            <div onClick={() => props.handledelete(item._id)}>x</div>
            <span onClick={() => props.handleComplete(item._id)}>
              {item.text}
            </span>
          </ListGroup.Item>
        ))}
      </ListGroup>

    </ul>
  );
  
}

export default TodoList;
