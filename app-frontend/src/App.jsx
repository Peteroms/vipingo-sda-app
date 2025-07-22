import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SabbathSchool from './pages/SabbathSchool';
import OnlineService from './pages/OnlineService';
import OnlineGiving from './pages/OnlineGiving';
import Ministries from './pages/Ministries';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full bg-white overflow-x-hidden">
        {/* Navbar stays on top */}
        <Navbar />

        {/* Main Content: flex-grow pushes footer to bottom */}
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sabbath-school" element={<SabbathSchool />} />
            <Route path="/online-service" element={<OnlineService />} />
            <Route path="/online-giving" element={<OnlineGiving />} />
            <Route path="/ministries" element={<Ministries />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </main>

        {/* Footer at the bottom */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
