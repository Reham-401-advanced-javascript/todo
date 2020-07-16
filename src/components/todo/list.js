import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function TodoList (props) {

  
  return (
    <ul>
      <ListGroup>
      
        {props.list.map((item ,i) => (
          <ListGroup.Item
            variant={item.complete ? 'success' : 'danger'}
            key={item._id}
          >
            <span onClick={() => props.handleComplete(item._id)}>
              {item.text}
            </span>
            <div className="delete">
              <button onClick={() => props.handleDelete(item._id)}>Delete </button>
              <button onClick={() => props.handleUpdate(i)}>Update </button>
              <input type="text" name={i}  placeholder={'Update text '+item.text} />
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

    </ul>
  );
  
}

export default TodoList;
