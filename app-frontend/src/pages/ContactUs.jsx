import { Phone, Mail } from 'lucide-react';
import { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Replace with your actual API Gateway endpoint
  const API_GATEWAY_URL = 'https://55h1te538j.execute-api.us-east-1.amazonaws.com/dev/contact';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(API_GATEWAY_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setSubmitStatus({ success: true, message: data.message || 'Message sent successfully!' });
      
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({ success: false, message: error.message || 'Failed to send message. Please try again.' });
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <h2>Request for prayers, visitations or inquries.</h2>
          {submitStatus && (
            <div className={`alert ${submitStatus.success ? 'success' : 'error'}`}>
              {submitStatus.message}
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email or Phone</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;