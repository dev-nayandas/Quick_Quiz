import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const part = ({part}) => {
    const {id,name,logo,total} = part;
    return (
        <CardGroup className='card'>
        <Card>
          <Card.Img variant="top" src={logo}/>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <h5>Total Question : {total}</h5>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Link to={`/topic/${id}`}>
              <Button variant="primary">Start Quiz</Button>
            </Link>
          </Card.Footer>
        </Card>
        
      </CardGroup>
    );
};

export default part;