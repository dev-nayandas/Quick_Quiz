import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <h2>Important Question</h2>
            <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>What are the purpose of React Router?</Accordion.Header>
        <Accordion.Body>
        React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application. It helps  navigation and routing functionalities. It helps  redirect to another page in ReactJS using react-router-dom package.It's saves our time and make us hassle free
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How does context API works?</Accordion.Header>
        <Accordion.Body>
          Context API directly send data to a disered compoent . It's no need to send data in every child component. It is not complex a prop drilling. It's saves our time.The React Context API allows us to produce the global data and share it across the application.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Basic knoledge about useRef</Accordion.Header>
        <Accordion.Body>
        useRef returns a mutable ref object whose current property is initialized to the passed argument. It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    );
};

export default Blog;