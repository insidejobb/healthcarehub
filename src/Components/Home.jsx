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
    <>
      <Navbar/>
      <div className='cc'>
      <div style={{marginTop:'17px'}}>
      <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item style={{color:'black'}}>
      <img src='../Images/curosel1.jpg' alt='a'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src='../Images/curosel2.jpg' alt='b'/>
      </Carousel.Item>
      <Carousel.Item>
      <img src='../Images/curosel3.jpg' alt='c'/>
      </Carousel.Item>
    </Carousel>
      </div>
    <div className='textContainer'>
      <h2>Discover the Enriching World of Senior Care Homes</h2>
    <p className='text'>A senior care home is a place where the gentle rhythms of daily life meet the unique needs 
          of older adults, creating a nurturing and supportive environment. Picture a warm and inviting
           residential setting nestled in a quiet neighborhood,
           where the tranquility of home life combines with expert care and attention.</p>
      <p className='text'>Family plays a vital role in this narrative. Loved ones are encouraged 
      to actively participate in the care and lives of residents. They visit, share stories,
       and join in care planning discussions. Together, they create a sense of community and belonging.</p>
      </div>
      </div>

      {/* //Cards dispayed here
      <div className='cardHolder'>
      <div className="card">
      <img src='../Images/mission.png' alt='abc' />
      <h2>Mission </h2>
      <p>The Compassion for the Aged Foundation aims to be a leading
         organization that provides geriatric care services to ...</p>
      <button className='btn btn-warning'>ReadMore</button>
    </div>
    <div className="card">
      <img src='../Images/vision.jpg' alt='abc' />
      <h2>Vision</h2>
      <p>To bring succor to the aged/elderly people in society 
        through missions in prosperity, health, and shelter.</p>
      <button className='btn btn-warning'>ReadMore</button>
    </div>
    <div className="card">
      <img src='../Images/objective.png' alt='abc' />
      <h2>Objective </h2>
      <p>Prosperity, health, and shelter, social wellbeing, healthcare, 
        and livelihood options necessary to cater for the aged...</p>
      <button className='btn btn-warning '>ReadMore</button>
    </div>
      </div> */}


      <div className='container'>
      <div className='row'>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className="card mb-4">
            <img src='../Images/mission.png' alt='abc' className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">Mission</h2>
              <p className="card-text">The Compassion for the Aged Foundation aims to be a leading organization that provides geriatric care services to ...</p>
              <button className='btn btn-warning'>Read More</button>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className="card mb-4">
            <img src='../Images/vision.jpg' alt='abc' className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">Vision</h2>
              <p className="card-text">To bring succor to the aged/elderly people in society through missions in prosperity, health, and shelter.</p>
              <button className='btn btn-warning'>Read More</button>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className="card mb-4">
            <img src='../Images/objective.png' alt='abc' className="card-img-top" />
            <div className="card-body">
              <h2 className="card-title">Objective</h2>
              <p className="card-text">Prosperity, health, and shelter, social wellbeing, healthcare, and livelihood options necessary to cater for the aged...</p>
              <button className='btn btn-warning'>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>









      <div className='volenteers'>
        <span>
          <h2>Volenteer</h2>
          <p className='paraTExt'>Volunteers donate their time and energy expecting nothing in return. 
            For their kindness and generosity, we love you to be a part of our 
            team toward helping the aged in the society, 
            we look forward to your contributions to our organization.</p>
            <button className='btn btn-danger'>ReadMore</button>
        </span>
        <span className='image_container'>
          <img src="../Images/volentery.jpg" alt='volenteerimage'/>
        </span>
      </div>
      <Footer/>
    </>
  )
}

export default Home
