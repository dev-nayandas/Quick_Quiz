import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div>
             <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="home"> Quick Quiz</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link href="home">Home</Nav.Link> */}
            <Nav.Link href="topics">Topics</Nav.Link>
            <Nav.Link href="statastics">Statastics</Nav.Link>
            <Nav.Link href="blog">Blog</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    );
};

export default NavBar;