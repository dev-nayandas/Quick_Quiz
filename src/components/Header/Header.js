import React from 'react';
import { Carousel } from 'react-bootstrap';

const Header = () => {
    return (
        <Carousel  >
        <Carousel.Item>
          <img style={{height:'400px'}}
            className="d-block w-100"
            src="https://images.pexels.com/photos/7092344/pexels-photo-7092344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'400px'}}
            className="d-block w-100"
            src="https://images.pexels.com/photos/7092593/pexels-photo-7092593.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{height:'400px'}}
            className="d-block w-100"
            src="https://images.pexels.com/photos/7092464/pexels-photo-7092464.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Header;