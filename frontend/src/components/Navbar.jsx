import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white shadow sticky top-0 z-50">
    <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-green-700">Vipingo SDA Church</h1>
      <ul className="flex gap-4 text-sm md:text-base">
        <li><Link to="/" className="hover:text-green-700">Home</Link></li>
        <li><Link to="/offerings" className="hover:text-green-700">Offerings</Link></li>
        <li><Link to="/announcements" className="hover:text-green-700">Announcements</Link></li>
        <li><Link to="/ministries" className="hover:text-green-700">Ministries</Link></li>
        <li><Link to="/media-gallery" className="hover:text-green-700">Media</Link></li>
        <li><Link to="/devotionals" className="hover:text-green-700">Devotionals</Link></li>
        <li><Link to="/prayer-requests" className="hover:text-green-700">Prayer</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
