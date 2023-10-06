import React from 'react';
import './ContactUs.css';
import Navbar from './Navbar';
import Footer from './Footer';

const ContactUs = () => {
  return (
    <>
    <Navbar/>
      <h2 className='contac_heading'>Contact page</h2>
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77491297276!2d77.30125923898248!3d12.954459539394112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1696503991888!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
<div className="ding">
<h2 className='contac_heading'>Fill the form to contact</h2>
      <div className="contact-form">
        <form
          action="https://formspree.io/f/mqkvkndp"
          method="POST"
          className="contact-inputs"
        >
          <input
            type="text"
            placeholder="Username"
            name="username"
            required
            autoComplete="off"
            className="form-input"
          />

          <input
            type="email"
            name="Email"
            placeholder="Email"
            autoComplete="off"
            required
            className="form-input"
          />

          <textarea
            name="Message"
            cols="30"
            rows="10"
            required
            autoComplete="off"
            placeholder="Enter your message"
            className="form-textarea"
          ></textarea>

          <input type="submit" value="Send" className="submit-button bg-outline-warning" />
        </form>
      </div>
    </div>
    </>
  )
}

export default ContactUs
