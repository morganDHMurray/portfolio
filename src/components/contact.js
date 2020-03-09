import React from 'react';
import SectionTitle from './section-title';
import SectionParagraph from './section-paragraph';

const Contact = () => {
  return (
    <div className="contact-container">
      <SectionTitle>Contact</SectionTitle>
      <SectionParagraph> Hey please get in touch</SectionParagraph>
      <div className="form-container">
        <form>
          <input type="text"></input>
          <input type="text"></input>
        </form>
      </div>
    </div>
  );
};
export default Contact;
