import React from 'react';

const OnlineService = () => {
  return (
    <div className="page online-service">
      <h1>Online Service</h1>
      <div className="content">
        <p>Join our live stream every Saturday at 11:00 AM</p>

        {/* Live Stream Container */}
        <div className="stream-container">
          <div className="stream-placeholder">
            <p>Live stream will appear here during service times</p>
          </div>
        </div>

        {/* Upcoming Services Section */}
        <div className="service-info">
          <h2>Online Devotions</h2>
          <p>Join us for uplifting bible studies and prayers.</p>
      

          {/* YouTube Channel Embed */}
          <div className="youtube-container">
            <iframe
              src="https://www.youtube.com/embed?listType=playlist&list=YOUR_PLAYLIST_ID"
              title="Church YouTube Channel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Optional link to channel */}
          <a
            href="https://www.youtube.com/@TCT-PROPHETIC"
            target="_blank"
            rel="noopener noreferrer"
            className="visit-channel-btn"
          >
            Visit Our YouTube Channel
          </a>
        </div>
      </div>
    </div>
  );
};

export default OnlineService;
