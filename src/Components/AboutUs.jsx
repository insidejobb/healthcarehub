import React from 'react';
import './AboutUs.css'; // Create a CSS file for styling
import Navbar from './Navbar';

const AboutUs = () => {
  return (
    <>
    <Navbar/>
     <div className="heading__inner">
        <span className='content1'>
          <h3>Mission of a Healthcare Home</h3>
        <p>
        The mission of a healthcare home is to provide high-quality, patient-centered primary care that addresses the holistic 
        healthcare needs of individuals and families. This mission can be broken down into several key components:
        </p>
        </span>
    </div>
    <div className='compressive'>
   <h2 style={{textAlign:'center'}}>Comprehensive Care</h2>
    <span class="section__body">
        <span>
            <img src="https://www.ncqa.org/wp-content/uploads/2018/07/PCMHLandingImage_DoctorPatient.jpg" alt="Doctor and Patient"/>
        </span>
        <span>
            <p class="content2">The patient-centered medical home is a model of care that puts patients at the forefront of care. PCMHs build better relationships between patients and their clinical care teams.</p>
            <p class="content2">Shows that PCMHs improve quality and the patient experience, and increase staff satisfaction—while reducing health care costs. Practices that earn recognition have made a commitment to continuous quality improvement and a patient-centered approach to care.</p>
        </span>
    </span>
   </div>
   <div className='missions'>
    <h2 style={{textAlign:'center'}}>What is our aim</h2>
    <div className='missionContent'>
        <div className='missionText'>
            <p className='content2'>The patient-centered medical home is a model of care that puts patients at the forefront of care. PCMHs build better relationships between patients and their clinical care teams.</p>
            <p className='content2'>Shows that PCMHs improve quality and the patient experience, and increase staff satisfaction—while reducing health care costs. Practices that earn recognition have made a commitment to continuous quality improvement and a patient-centered approach to care.</p>
        </div>
        <div className='missionImage'>
            <img src="https://www.anvayaa.com/src/img/people-partner-ecosystem.png" alt="Doctor and Patient"/>
        </div>
    </div>
</div>

    <div className='values'>
      <h3 style={{textAlign:'center'}}>Values of a Healthcare Home</h3>
      <p>
      Everyone has a unique need, and we understand that. From being there for your parents for a casual conversation 
      or for helping in a crisis, we do everything a family member could do for them.
      </p>
      <div style={{display:'flex'}}>
      <div className='valuebox'>
      <h4>Helo</h4>
        <p>Patients are at the center of all decisions related to their care. Their goals,
           preferences, and values are considered when developing 
          treatment plans and care strategies.</p>
      </div>
      <div className='valuebox'>
        <h4>Helo</h4>
        <p>Patients are at the center of all decisions related to their care. Their goals,
           preferences, and values are considered when developing 
          treatment plans and care strategies.</p>
      </div>
      <div className='valuebox'>
        <h4>Helo</h4>
        <img src="https://www.anvayaa.com/src/img/people-partner-ecosystem.png" alt="Doctor and Patient"/>
        <p>Patients are at the center of all decisions related to their care. Their goals,
           preferences, and values are considered when developing 
          treatment plans and care strategies.</p>
      </div>
      </div>
      
    </div>
    </>
  );
};

export default AboutUs;
