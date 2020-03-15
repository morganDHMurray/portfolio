import React from 'react';
import SectionTitle from './section-title';
import SectionParagraph from './section-paragraph';

const Contact = () => {
  return (
    <div className="contact-container">
      <SectionTitle>Contact</SectionTitle>
      <SectionParagraph> Hey please get in touch</SectionParagraph>
      <div className="form-container">
        <form method="post" action="#">
          <label>
            Name
            <input type="text" name="name" id="name" />
          </label>
          <label>
            Email
            <input type="email" name="email" id="email" />
          </label>
          <label>
            Subject
            <input type="text" name="subject" id="subject" />
          </label>
          <label>
            Message
            <textarea name="message" id="message" rows="5" />
          </label>
          <button type="submit">Send</button>
          <input type="reset" value="Clear" />
        </form>
      </div>
    </div>
  );
};
export default Contact;
