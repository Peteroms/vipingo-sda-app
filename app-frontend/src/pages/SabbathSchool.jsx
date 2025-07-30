import React from 'react';
import { Link } from 'react-router-dom';
import banner4 from '../assets/banner4.jpg'; // Make sure to import your image

const SabbathSchool = () => {
  return (
    <div className="page sabbath-school">
      <h1>Sabbath School</h1>
      <div className="content">
        <p>Sabbath School is the SDA Church's organized approach to Bible study, mission focus, and fellowship, forming an essential part of spiritual life and community every Sabbath morning</p>
        <div className="lesson-section">
          <h2>Quarterly Lesson Studies</h2>
          <p>
            <a 
              href="https://www.sabbath.school/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="lesson-link"
            >
              This week's lesson.
            </a>
          </p>
        </div>
        
        {/* Added banner image */}
        <div className="sabbath-banner">
          <img 
            src={banner4} 
            alt="Sabbath School Banner" 
            className="banner-image"
          />
        </div>
      </div>
    </div>
  );
};

export default SabbathSchool;