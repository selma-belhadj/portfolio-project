import React from 'react';
import './contact.css';
import { MdOutlineMailOutline } from 'react-icons/md';
import { RiTwitterLine } from 'react-icons/ri';

const Contact = () => (
  <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineMailOutline className="contact__option-icon" />
          <h4>Email</h4>
          <h5>belhadjselma1@gmail.com</h5>
          <a href="mailto:belhadjselma1@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
        </article>

        <article className="contact__option">
          <RiTwitterLine className="contact__option-icon" />
          <h4>Twitter</h4>
          <h5>Selma Belhadj</h5>
          <a href="https://twitter.com/selma_bel_hadj" target="_blank" rel="noreferrer">Twitter a message</a>
        </article>
      </div>
      {/* End of contact options */}
      <form action="">
        <input type="text" name="name" placeholder="Your fullname" required />
        <input type="email" name="Email" placeholder="Your email" required />
        <textarea name="message" id="" rows="7" placeholder="Your message" required />
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact;
