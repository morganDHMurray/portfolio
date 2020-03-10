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
          <label>Name</label>
          <input type="text"></input>
          <label>Email</label>
          <input type="text"></input>
        </form>
      </div>
    </div>
  );
};
export default Contact;
