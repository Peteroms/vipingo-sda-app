import React from 'react';

const OnlineGiving = () => {
  return (
    <div className="page online-giving">
      <h1>Online Giving</h1>
      <div className="content">
        <p>Support the ministries of Vipingo Seventh-day Adventist Church</p>
        <div className="giving-options">
          <div className="giving-option">
            <h3>Tithes</h3>
            <button>Give Tithe</button>
          </div>
          <div className="giving-option">
            <h3>Offerings</h3>
            <button>Give Offering</button>
          </div>
          <div className="giving-option">
            <h3>Special Projects</h3>
            <button>Give to Projects</button>
          </div>
        </div>
        <div className="giving-disclaimer">
          <p>All donations are tax-deductible. Thank you for your generosity.</p>
        </div>
      </div>
    </div>
  );
};

export default OnlineGiving;