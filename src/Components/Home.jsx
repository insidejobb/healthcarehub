import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './Home.css'; // Create a CSS file for styling

const Home = () => {
  return (
    <div className="homepage">
      <div className="loading-screen">
        <img src="https://media.licdn.com/dms/image/C4D0BAQETK_IMc2G9LQ/company-logo_200_200/0/1568300176904?e=2147483647&v=beta&t=08YUa0z4zxue7Nj7AwIUtLIXBdYXzDX-9bBBma94uPg" alt="Logo" className="logo" />
      </div>
      <div className="content">
        <h1>Welcome to Senior Care Home</h1>
        <p>A Place Where Seniors Thrive</p>
        <p>
          We provide compassionate care and support to seniors to ensure their
          well-being and happiness.
        </p>

        {/* Navigation Links */}
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Home;
