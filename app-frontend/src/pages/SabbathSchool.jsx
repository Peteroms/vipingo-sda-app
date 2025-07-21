import React from 'react';
import { Link } from 'react-router-dom';
import banner4 from '../assets/banner4.jpg'; // Make sure to import your image

const SabbathSchool = () => {
  return (
    <div className="page sabbath-school">
      <h1>Sabbath School</h1>
      <div className="content">
        <p>Join us for Sabbath School every Saturday at 8:30 AM</p>
        <div className="lesson-section">
          <h2>This Week's Lesson</h2>
          <p>
            <a 
              href="https://www.sabbath.school/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="lesson-link"
            >
              Click here to access the weekly lesson study Series.
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