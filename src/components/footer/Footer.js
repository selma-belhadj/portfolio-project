import React from 'react';
import './footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaAngellist } from 'react-icons/fa';
import { RiTwitterLine } from 'react-icons/ri';

const Footer = () => (
  <footer>
    <a href="#home" className="footer__logo">Selma</a>
    <ul className="permalinks">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      {/* <li><a href="#services">Services</a></li> */}
      <li><a href="#portfolio">Projects</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://www.linkedin.com/in/selma-belhadj/" target="_blank" rel="noreferrer">
        <BsLinkedin />
      </a>
      <a href="https://github.com/selma-belhadj" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://angel.co/u/selma-belhadj" target="_blank" rel="noreferrer">
        <FaAngellist />
      </a>
      <a href="https://twitter.com/selma_bel_hadj" target="_blank" rel="noreferrer">
        <RiTwitterLine />
      </a>
    </div>

    <div className="footer__copyright">
      <small>&copy; SELMA BELHADJ. All rights reserved.</small>
    </div>

  </footer>
);

export default Footer;
