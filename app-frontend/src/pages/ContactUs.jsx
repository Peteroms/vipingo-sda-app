const ContactUs = () => {
  return (
    <div className="page contact-us">
      <h1>Contact Us</h1>
      <div className="content">
        <div className="contact-info">
          <h2>Church Info</h2>
          <p><strong>Address:</strong> Vipingo, Kilifi</p>
          <p><strong>Phone:</strong> +25455806579</p>
          <p><strong>Email:</strong> info@vipingosda.org</p>
          <p><strong>Pastor:</strong> Charles Nyakundi</p>
        </div>
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5"></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
