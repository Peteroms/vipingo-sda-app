import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  return (
    <div className="page home">
      {/* Image Slider */}
      <div className="home-banner">
        <Slider {...sliderSettings}>
          <div>
            <img src={banner1} alt="Church Banner 1" />
          </div>
          <div>
            <img src={banner2} alt="Church Banner 2" />
          </div>
          <div>
            <img src={banner3} alt="Church Banner 3" />
          </div>
        </Slider>
      </div>

      <div className="welcome-section">
        <div className="welcome-card">
          <p className="welcome-subtitle">"Making disciples of Jesus Christ and proclaim the everlasting gospel of the Three Angels' Messages in Revelation 14:6-12"</p>
          <div className="welcome-content">
            
            <p>Saturday Services:</p>
            <ul className="service-times">
              <li>Sabbath School: 8:30 AM</li>
              <li>Divine Service: 11:00 AM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;