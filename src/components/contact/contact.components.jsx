import React from "react";
import emailjs from 'emailjs-com';
import './contact.styles.scss';

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_mvzan8j', 'my_template', e.target, 'user_ZyCbIuxUAa3MOrNS45kMI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div className="contact-container">
      <form className="form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label for="name">Name</label>
        <input type="text" id="name" name="name" />
        <label for="email">Email</label>
        <input type="email" id="email" name="email" />
        <label for="message">Message</label>
        <textarea name="message" id="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};