import React, { useState } from 'react';

const PrayerRequests = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Prayer request submitted: " + message);
    setMessage('');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Prayer Requests</h2>
      <form onSubmit={handleSubmit}>
        <textarea 
          className="w-full border p-2 rounded mb-4" 
          rows="4" 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your prayer request..."
          required
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default PrayerRequests;
