import React from 'react'
import './Footer.css';
const Footer = () => {
  return (
    <>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-sm-3 logo-box">
                    <img src="https://www.anvayaa.com/src/img/footer-logo.png" alt="Anvayaa" title="Anvayaa" class="footer-logo"/>
                </div>
                <div class="col-md-6 clearfix">
                    <ul class="footer-links">
                        <li class="footer-heading">Care Story</li>
                        <li>Our Values</li>
                        
                    </ul>
                   
                </div>
                <div class="col-md-3">
                    <h3>You Need a Helping Hand for your Parents?</h3>
                    <nav class="app-links">
                        <img src="https://www.anvayaa.com/src/img/appstore.png" alt="Anvayaa on App Store" title="Anvayaa on App Store"/>
                        <img src="https://www.anvayaa.com/src/img/playstore.png" alt="Anvayaa on Google Playstore" title="Anvayaa on Google Playstore"/>
                    </nav>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
