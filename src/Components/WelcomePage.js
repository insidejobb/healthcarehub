import React,{useState,useEffect} from 'react'
import './WelcomePage.css'
import { useNavigate } from 'react-router-dom';
const WelcomePage = () => {
  const [showButton, setShowButton] = useState(false);
  const navigate=useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  function navigator(){
    navigate('/Home');

  }
  return (
    <>
      <h1>
      <span>W</span>
      <span>E</span>
      <span>L</span>
      <span>C</span>
      <span>O</span>
      <span>M</span>
      <span>E</span>
      </h1>
    <div className='showbuton'>
    {showButton && (
        <button className='botton' onClick={navigator}>
          Visit the page
        </button>
      )}
    </div>
    </>
  )
}

export default WelcomePage

