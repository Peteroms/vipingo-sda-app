import React from 'react';
import { Link } from 'react-router-dom';

const SabbathSchool = () => {
  return (
    <div className="page sabbath-school">
      <h1>Sabbath School</h1>
      <div className="content">
        <p>Join us for Sabbath School every Saturday at 8:30 AM</p>
        <div className="lesson-section">
          <h2>This Week's Lesson</h2>
          <p>Check back for updates on our current Bible study series.</p>
        </div>
      </div>
    </div>
  );
};

export default SabbathSchool;