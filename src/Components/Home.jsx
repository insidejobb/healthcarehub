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
      <div style={{width:'50%',marginTop:'17px'}}>
      <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item style={{color:'black'}}>
      <img src='https://img.freepik.com/free-vector/homecare-services-cartoon-landing-page_107791-5638.jpg?w=740&t=st=1696570684~exp=1696571284~hmac=234274c5c8c96165222d2e63482351c33015332738f630cecf3dd8a6b6f27d93' alt='a'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://img.freepik.com/free-vector/elderly-care-cartoon-concept-with-old-women-walking-outdoors-vector-illustration_1284-80135.jpg?w=740&t=st=1696570774~exp=1696571374~hmac=8d694f0d729eb9e162b47fb771eb448e88da87fc1adde48c14f81b9c966a6fee' alt='b'/>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://i.pinimg.com/736x/c2/ed/8c/c2ed8ca78ba4bb75e83e4b5c6361b526.jpg' alt='c'/>
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

      {/* //Cards dispayed here */}
      <div className='cardHolder'>
      <div className="card  col-lg-4 col-md-6 col-sm-12">
      <img src='https://cftaf.org/wp-content/uploads/2018/07/vision-and-mission-770x515-1.png' alt='abc' />
      <h2>Mission </h2>
      <p>The Compassion for the Aged Foundation aims to be a leading
         organization that provides geriatric care services to ...</p>
      <button className='btn btn-warning'>ReadMore</button>
    </div>
    <div className="card">
      <img src='https://cftaf.org/wp-content/uploads/2018/07/vision-2.jpg' alt='abc' />
      <h2>Vision</h2>
      <p>To bring succor to the aged/elderly people in society 
        through missions in prosperity, health, and shelter.</p>
      <button className='btn btn-warning'>ReadMore</button>
    </div>
    <div className="card">
      <img src='https://cftaf.org/wp-content/uploads/2018/07/52338894-objectives-word-cloud-business-concept.png' alt='abc' />
      <h2>Objective </h2>
      <p>Prosperity, health, and shelter, social wellbeing, healthcare, 
        and livelihood options necessary to cater for the aged...</p>
      <button className='btn btn-warning '>ReadMore</button>
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
          <img src="https://cftaf.org/wp-content/uploads/2023/04/volunteers-needed-button-speech-bubble-volunteer-needed-web-banner-template-illustration-vector.jpg" alt='volenteerimage'/>
        </span>
      </div>
      <Footer/>
    </>
  )
}

export default Home
