import React from 'react';
import SectionTitle from './section-title';
import SectionParagraph from './section-paragraph';
import PrimaryButton from './primary-button.js';
import SecondaryButton from './secondary-button';
import TextField from './text-field';

const Contact = () => {
  return (
    <div className="contact-container" id="contact" data-aos="fade-down">
      <div className="contact-content">
        <SectionTitle>Contact</SectionTitle>
        <SectionParagraph>
          {' '}
          Feel free to get in contact via my{' '}
          <a href="https://www.linkedin.com/in/morgan-murray-9151b7155/">
            Linked In
          </a>{' '}
          page or through the form to the right. Book reccommendations welcome!
        </SectionParagraph>
      </div>
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
