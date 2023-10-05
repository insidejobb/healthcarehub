import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react';
import './Home.css'
import Carousel from 'react-bootstrap/Carousel';
import Footer from './Footer';

const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Navbar/>
      <div className='cc'>
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg'/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
