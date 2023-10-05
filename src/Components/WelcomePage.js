import React,{useState,useEffect} from 'react'
import './WelcomePage.css'
import { useNavigate } from 'react-router-dom';
const WelcomePage = () => {
  const [showButton, setShowButton] = useState(false);
  const navigate=useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  function navigator(){
    navigate('/Home');

  }
  return (
    <>
    <div>
      <div className='image_container'>
      <img src="https://static.thenounproject.com/png/1334461-200.png" alt="Loading Image" className="loading-image" />
      </div>
    <div>
      <h1>
      <span>L</span>
      <span>O</span>
      <span>A</span>
      <span>D</span>
      <span>I</span>
      <span>N</span>
      <span>G</span>
      </h1>
    </div>
    <div className='container'>
    {showButton && <button className='botton' onClick={navigator}>Login</button>}
    </div>
    </div>
    </>
  )
}

export default WelcomePage

