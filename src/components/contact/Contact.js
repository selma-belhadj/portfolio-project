import React from 'react';
import './contact.css';
import { MdOutlineMailOutline } from 'react-icons/md';
import { RiTwitterLine } from 'react-icons/ri';

const Contact = () => (
  <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact_container">
      <div className="contact options">
        <article className="contact__option">
          <MdOutlineMailOutline />
          <h4>Email</h4>
          <h5>belhadjselma1@gmail.com</h5>
          <a href="mailto:belhadjselma1@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
        </article>

        <article className="contact__option">
          <RiTwitterLine />
          <h4>Twitter</h4>
          <h5>Selma Belhadj</h5>
          <a href="https://twitter.com/selma_bel_hadj" target="_blank" rel="noreferrer">Twitter a message</a>
        </article>
      </div>
      {/* End of contact options */}
      
    </div>
  </section>
);

export default Contact;
