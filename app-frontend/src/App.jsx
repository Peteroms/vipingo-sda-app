import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Offerings from './pages/Offerings';
import Announcements from './pages/Announcements';

const App = () => (
  <div className="min-h-screen bg-gray-100 text-gray-900">
    <nav className="bg-white p-4 shadow">
      <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/offerings">Offerings</Link></li>
        <li><Link to="/announcements">Announcements</Link></li>
      </ul>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/offerings" element={<Offerings />} />
      <Route path="/announcements" element={<Announcements />} />
    </Routes>
  </div>
);

export default App;
