import React from 'react';
import SectionTitle from './section-title';
import SectionParagraph from './section-paragraph';
import PrimaryButton from './primary-button.js';
import SecondaryButton from './secondary-button';
import TextField from './text-field';

const Contact = () => {
  return (
    <div className="contact-container">
      <SectionTitle>Contact</SectionTitle>
      <SectionParagraph> Hey please get in touch</SectionParagraph>
      <form className="form-container" method="post" action="#">
        <TextField>
          Name
          <input type="text" name="name" id="name" />
        </TextField>
        <TextField>
          Email
          <input type="email" name="email" id="email" />
        </TextField>
        <TextField>
          Subject
          <input type="text" name="subject" id="subject" />
        </TextField>
        <TextField>
          Message
          <textarea name="message" id="message" rows="5" />
        </TextField>
        <div className="form-buttons">
          <PrimaryButton>Submit</PrimaryButton>
          <SecondaryButton>Clear</SecondaryButton>
        </div>
      </form>
    </div>
  );
};
export default Contact;
