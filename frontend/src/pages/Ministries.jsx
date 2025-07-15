import React from 'react';

const ministries = [
  { name: 'Youth Ministry', description: 'Supporting our youth in faith and service.' },
  { name: 'Women Ministry', description: 'Empowering women in spiritual growth.' },
  { name: 'Music Ministry', description: 'Leading worship through music and praise.' },
  { name: 'Health Ministry', description: 'Promoting healthy lifestyles and medical outreach.' },
];

const Ministries = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Church Ministries</h2>
    <div className="grid gap-4 md:grid-cols-2">
      {ministries.map((m, index) => (
        <div key={index} className="border p-4 rounded shadow bg-white">
          <h3 className="text-xl font-semibold">{m.name}</h3>
          <p>{m.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Ministries;
