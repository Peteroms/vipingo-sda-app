import { Phone, Mail } from 'lucide-react';


const ContactUs = () => {
  return (
    <div className="page contact-us">

      <div className="contact-grid">
        {/* Left Column: Contact Info & Map */}
        <div className="left-section">
          <div className="contact-info">
            <h2>Our Details</h2>
            <p className="info-line">
              <Phone className="icon" />
              <span>+254 786 926036</span>
            </p>
            <p className="info-line">
              <Mail className="icon" />
              <span>info@vipingosda.org</span>
            </p>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15923.812507480856!2d39.77555775272313!3d-3.8201958384574173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x183ff1beeabdb477%3A0x5ddd9c58a770fc7!2sSDA%20church%20Vipingo!5e0!3m2!1sen!2ske!4v1753028275643!5m2!1sen!2ske"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SDA Church Vipingo Location"
            ></iframe>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-form">
          <h2>Send us a message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
