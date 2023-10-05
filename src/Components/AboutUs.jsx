import React from 'react';
import './AboutUs.css'; // Create a CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us">
  <h2>About Our Senior Care Home</h2>
  <p>
    At Senior Care Home, we are dedicated to providing the highest quality
    of care and support to seniors in a comfortable and nurturing environment.
    Our mission is to enhance the well-being and happiness of our residents
    while upholding the following core values:
  </p>
  <ul>
    <li>Compassion</li>
    <li>Dignity</li>
    <li>Respect</li>
    <li>Quality Care</li>
    {/* Add more values if needed */}
  </ul>
  <div className="image-gallery">
  <h3>Explore Our Facilities</h3>
  <div className="gallery-images">
    <img src="https://imageio.forbes.com/specials-images/imageserve/5f933c1d41b442eccb9ade87/0x0.jpg?format=jpg&crop=2126,1196,x116,y0,safe&width=1200" alt="Facility 1" />
    <img src="https://content.presspage.com/uploads/1873/1920_hospitalathome3.png?10000" alt="Facility 2" />
    <img src="https://img.freepik.com/free-photo/doctor-doing-their-work-pediatrics-office_23-2149224133.jpg" alt="Facility 3" />
    {/* Add more images as needed */}
  </div>
</div>

</div>

  );
};

export default AboutUs;
