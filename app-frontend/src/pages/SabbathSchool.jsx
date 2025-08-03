import React from 'react';
import { Link } from 'react-router-dom';
import banner4 from '../assets/banner4.jpg';
import banner6 from '../assets/banner6.jpg';
import banner7 from '../assets/banner7.jpg';
import banner8 from '../assets/banner8.jpg'; // Ensure this file exists

const SabbathSchool = () => {
  return (
    <div className="page sabbath-school">
      <h1>Sabbath School</h1>

      <div className="content">
        <p>
          Sabbath School is the SDA Church's organized approach to Bible study,
          mission focus, and fellowship, forming an essential part of spiritual
          life and community every Sabbath morning.
        </p>

        <div className="lesson-section">
          <h2>Quarterly Adult Lesson Studies:</h2>
          <p>
            <a
              href="https://www.sabbath.school/"
              target="_blank"
              rel="noopener noreferrer"
              className="lesson-link"
            >
              <strong>This week's lesson</strong>
            </a>
          </p>
        </div>

        <div className="sabbath-banner">
          <img
            src={banner4}
            alt="Sabbath School Banner"
            className="banner-image"
          />
        </div>

        <div className="cornerstone-connections">
          <h2>Cornerstone Connections:</h2>
          <p>
            <a
              href="https://www.cornerstoneconnections.net/lessons"
              target="_blank"
              rel="noopener noreferrer"
              className="lesson-link"
            >
              <strong>Lesson Guide</strong>
            </a>
          </p>
        </div>

        <div className="cornerstone-banner">
          <img
            src={banner6}
            alt="Cornerstone Connections Banner"
            className="banner-image"
          />
        </div>

        <div className="powerpoint-section">
          <h2>PowerPoint Lesson:</h2>
          <p>
            <a
              href="https://www.juniorpowerpoints.org/page2447"
              target="_blank"
              rel="noopener noreferrer"
              className="lesson-link"
            >
              <strong>Junior PowerPoint Guide</strong>
            </a>
          </p>
        </div>

        <div className="powerpoint-banner">
          <img
            src={banner7}
            alt="Junior PowerPoints Banner"
            className="banner-image"
          />
        </div>

        <div className="realtime-faith-section">
          <h2>Real-Time Faith:</h2>
          <p>
            <a
              href="https://www.realtimefaith.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="lesson-link"
            >
              <strong>Real-Time Faith Guide</strong>
            </a>
          </p>
        </div>

        <div className="realtime-faith-banner">
          <img
            src={banner8}
            alt="Real-Time Faith Banner"
            className="banner-image"
          />
        </div>
      </div>
    </div>
  );
};

export default SabbathSchool;
