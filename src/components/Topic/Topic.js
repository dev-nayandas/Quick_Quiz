import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Topic = ({topic}) => {
    const {name,id,logo,total} = topic;
    return (
        <CardGroup>
        <Card>
          <Card.Img variant="top" src={logo}/>
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        
      </CardGroup>
    );
};

export default Topic;