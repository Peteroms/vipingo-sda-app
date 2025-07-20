import { useState } from 'react';


const Ministries = () => {
  const [activeTab, setActiveTab] = useState('children');

  const ministries = {
    children: {
      title: "Children's Ministry",
      announcements: [
        "Vacation Bible School - July 25-29, 9:00 AM to 12:00 PM",
        "Children's Sabbath - First Sabbath of every month",
        "Bible memorization competition - August 15"
      ]
    },
    family: {
      title: "Family Ministry",
      announcements: [
        "Family Retreat - August 12-14 at Shimba Hills",
        "Marriage Enrichment Seminar - Every Friday at 5:00 PM",
        "Parenting Workshop - July 30 at 2:00 PM"
      ]
    },
    health: {
      title: "Health Ministry",
      announcements: [
        "Free Medical Camp - July 23 at church compound",
        "Nutrition Workshop - Every Wednesday at 4:00 PM",
        "Blood Donation Drive - August 5"
      ]
    },
    personal: {
      title: "Personal Ministry",
      announcements: [
        "Bible Study Training - July 30 at 3:00 PM",
        "Evangelism Campaign - August 1-7",
        "Literature Distribution - Every Sunday afternoon"
      ]
    },
    sabbathSchool: {
      title: "Sabbath School",
      announcements: [
        "Quarterly Lesson Study - Every Sabbath at 9:30 AM",
        "Sabbath School Teachers Meeting - Last Friday of the month",
        "Special Lesson Review - July 30 at 4:00 PM"
      ]
    },
    women: {
      title: "Women's Ministry",
      announcements: [
        "Women's Retreat - August 19-21",
        "Dorcas Meeting - Every Tuesday at 10:00 AM",
        "Health & Wellness Seminar - July 28 at 3:00 PM"
      ]
    },
    amo: {
      title: "AMO",
      announcements: [
        "Men's Breakfast Fellowship - First Sunday of the month",
        "Work Bee - Every last Sunday of the month",
        "Leadership Training - August 6 at 2:00 PM"
      ]
    },
    youth: {
      title: "Youth Ministry",
      announcements: [
        "Youth Rally - July 30 at 4:00 PM",
        "Sports Day - Every Sunday afternoon",
        "Music Festival - August 13"
      ]
    },
    publishing: {
      title: "Publishing Ministry",
      announcements: [
        "Literature Evangelism Training - July 24 at 10:00 AM",
        "Magazine Distribution - Every Sabbath afternoon",
        "Book Fair - August 20-21"
      ]
    }
  };

  return (
    <div className="page ministries">
      <h1>Church Ministries</h1>
      
      <div className="ministries-tabs">
        {Object.keys(ministries).map((key) => (
          <button
            key={key}
            className={`tab-button ${activeTab === key ? 'active' : ''}`}
            onClick={() => setActiveTab(key)}
          >
            {ministries[key].title}
          </button>
        ))}
      </div>

      <div className="ministry-content">
        <h2>{ministries[activeTab].title}</h2>
        <div className="announcements">
          <h3>Announcements & Events</h3>
          <ul>
            {ministries[activeTab].announcements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Ministries;