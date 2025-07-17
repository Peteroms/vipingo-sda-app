import React, { useEffect, useState } from 'react';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    fetch("https://your-api-id.execute-api.region.amazonaws.com/prod/announcements")
      .then(res => res.json())
      .then(data => setAnnouncements(data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Church Announcements</h2>
      <ul className="space-y-2">
        {announcements.map(item => (
          <li key={item.id} className="bg-white p-4 shadow rounded">
            <div className="font-semibold">{item.title}</div>
            <div className="text-sm text-gray-500">{item.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Announcements;
