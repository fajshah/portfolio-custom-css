import React from 'react'; // Ensure React is imported
import { AiOutlineMail } from "react-icons/ai"; 
import { BsTelephone } from "react-icons/bs"; 
import '../app/styles/contact.css'; // Correct the path based on where your contact.css file is

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-grid md:grid-cols-2">
        <div className="contact-space">
          <h2 className="contact-heading" data-aos="zoom-in-up">Keep in touch</h2>
          <p className="contact-text" data-aos="zoom-in-up">
            Drop me a line, give me a call, or send me a message by submitting the form.
          </p>

          {/* Contact Information */}
          <div className="contact-flex" data-aos="zoom-in-up">
            <AiOutlineMail size={35} /> fajjibarbie@gmail.com
          </div>
          <div className="contact-flex" data-aos="zoom-in-up">
            <BsTelephone size={35} /> 0300-2016309
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-space">
          <form className="form" data-aos="zoom-in-up">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                className="input-field" 
                placeholder="Your Name" 
                aria-label="Your Name" 
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                className="input-field" 
                placeholder="Your Email" 
                aria-label="Your Email"
              />
            </div>
            <div className="form-field">
              <label htmlFor="msg">Message</label>
              <textarea 
                id="msg" 
                className="textarea-field" 
                rows ="8" 
                placeholder="Your Message" 
                aria-label="Your Message"
              ></textarea>
            </div>
            <button type="submit" className="button" data-aos="zoom-in-up">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
