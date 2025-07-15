import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import OfferingsForm from './pages/OfferingsForm';
import Announcements from './pages/Announcements';
import Ministries from './pages/Ministries';
import MediaGallery from './pages/MediaGallery';
import Devotionals from './pages/Devotionals';
import PrayerRequests from './pages/PrayerRequests';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offerings" element={<OfferingsForm />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/ministries" element={<Ministries />} />
        <Route path="/media-gallery" element={<MediaGallery />} />
        <Route path="/devotionals" element={<Devotionals />} />
        <Route path="/prayer-requests" element={<PrayerRequests />} />
      </Routes>
    </div>
  );
};

export default App;
