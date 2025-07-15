import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/church-hero.jpg';

const Home = () => (
  <div className="text-center">
    <div 
      className="h-64 bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold shadow"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      Welcome to Vipingo SDA Church
    </div>
    <div className="mt-10 space-y-4">
      <p className="text-xl">Experience worship, fellowship, and giving with us.</p>
      <Link to="/offerings" className="px-6 py-3 bg-green-700 text-white rounded shadow hover:bg-green-800">
        Give an Offering
      </Link>
    </div>
  </div>
);

export default Home;
