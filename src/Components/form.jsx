import React from "react";
import "../Styles/from.css"
import contact from "../assets/contactus.png"
function ContactForm() {
  return (
    <>
      <div className="Contact-us-main">
        <div className="form">
          <div className="form-container">
            {/* <h2>Contact Us</h2> */}
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="contact_reason"
                  value="hi"
                  defaultChecked
                />{" "}
                Say Hi
              </label>
              <label>
                <input type="radio" name="contact_reason" value="quote" /> Get a
                Quote
              </label>
            </div>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message*</label>
                <br />
                <textarea
                  id="message"
                  className="Ok"
                  name="message"
                  rows="7"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="image-contact">
          <img src={contact} alt="Contact Us" />
        </div>
      </div>
    </>
  );
}

export default ContactForm;
