import React from "react";
import "../style/contact.css";

function Contact({ showMessage }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    showMessage("Thank you! Your message has been sent.");
    event.target.reset();
  };
  return (
    <section className="contact-section" id="contact">

      <div className="contact-container">

        <div className="contact-form-box">

          <h2>Contact Us</h2>
          <p>We would love to hear from you!</p>
          <form onSubmit={handleSubmit}>

            <label>Name</label>
            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <label>Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              required
            />

            <label>Message</label>
            <textarea
              rows="4"
              placeholder="Type your message here..."
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>
        </div>


        <div className="contact-details">

          <h2>Visit TastyBites</h2>
          <p className="details-text">
            Have a question about our food or want to place an order?
            Get in touch with TastyBites. We are always happy to help!
          </p>

          <div className="contact-card">

            <div className="icon">📍</div>

            <div>
              <h3>Our Location</h3>
              <p>
                25 Main Road,
                <br />
                Salem, Tamil Nadu
              </p>
            </div>

          </div>

          <div className="contact-card">

            <div className="icon">📞</div>

            <div>
              <h3>Call Us</h3>
              <p>+91 9600377581</p>
            </div>

          </div>

          <div className="contact-card">

            <div className="icon">✉</div>

            <div>
              <h3>Email Us</h3>
              <p>hello@tastybites.com</p>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
export default Contact;