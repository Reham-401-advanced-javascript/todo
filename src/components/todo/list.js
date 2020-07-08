import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './todo.scss';

function TodoList (props) {

  // console.log('sssssssssss',props.list);
  return (
    <ul>
      <ListGroup>
      
        {props.list.map((item) => (

          <ListGroup.Item>
            <Button style={{marginRight:'1vw'}} className="rounded-pill" alt="120x75" variant={(item.complete)?'danger':'success'} onClick={() => props.handleComplete(item._id)}>{(item.complete)?'complete':'pending'}</Button>

            <p  style={{marginRight:'2vw'}}>{item.assignee}</p>
            <Button style={{marginLeft:'10vw'}} aria-label="Third group" alt="20x20" onClick={() => props.handledelete(item._id)}>X</Button>
            <Modal.Body >
              <p>{item.text}</p>
            </Modal.Body>
            <Modal.Footer>
              <p>Difficulty: {item.difficulty}</p>
            </Modal.Footer>
          </ListGroup.Item>
        ))}
      </ListGroup>

    </ul>
  );
  
}

export default TodoList;
