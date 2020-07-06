import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function TodoForm (props) {

  const [item, setItem] = useState({});

    
  const handleInputChange = e => {
    setItem({...item, [e.target.name]: e.target.value } );
  };
  const url = 'https://lab-32.herokuapp.com/todo';

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
   
    const fetchData = async () => {
      fetch(url,{
        method : 'post',
        mode: 'cors',
        cache: 'no-cache',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      })
        .then((response) => response.json())
        .then((result) => {

          console.log('kkkkkkkkkkkkkkkkkkkk',result);
          props.handleSubmit(result);
        })
        .catch(console.error);
    };
    fetchData();
    // const item = {};
    // setItem(item);
  };

 
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Add Item</Card.Title>
        </Card.Body>
        <Form onSubmit={handleSubmit}>
          <Container>
            <Row>
              <Form.Label>
                <span>To Do Item</span>
                <Form.Control
                  name="text"
                  placeholder="Add To Do List Item"
                  onChange={handleInputChange}
                />
              </Form.Label>
            </Row>
            <Row>
              <Form.Label>
                <span>Assigned To</span>
                <Form.Control
                  type="text"
                  name="assignee"
                  placeholder="Assigned To"
                  onChange={handleInputChange}
                />
              </Form.Label>
            </Row>
            <Row>
              
              <Form.Group controlId="formBasicRange">
                <Form.Label>Difficulty Rating</Form.Label>
                <Form.Control type="range" />
              </Form.Group>
            </Row>
            <Button variant="primary" type="submit">
              Add Item
            </Button>
          </Container>
        </Form>
      </Card>
      {/* <h3>Add Item</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>To Do Item</span>
          <input
            name="text"
            placeholder="Add To Do List Item"
            onChange={handleInputChange}
          />
        </label>
        <label>
          <span>Difficulty Rating</span>
          <input defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={handleInputChange} />
        </label>
        <label>
          <span>Assigned To</span>
          <input type="text" name="assignee" placeholder="Assigned To" onChange={handleInputChange} />
        </label>
        <button>Add Item</button>
      </form> */}
    </>
  );
}


export default TodoForm;
