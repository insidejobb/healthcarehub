import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Services = () => {
  return (
    <div>
      <Navbar/>
      <h1>Services here</h1>
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77491297276!2d77.30125923898248!3d12.954459539394112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1696503991888!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Footer/>
    </div>

  )
}

export default Services
