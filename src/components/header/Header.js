/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import CTA from './CTA';
import './header.css';
import ME from '../../assets/me1.png';
import HeaderSocials from './HeaderSocials';

const Header = () => (
  <header id="home">
    <div className="container header__container">
      <h5>Hello I&apos;m</h5>
      <h1>Selma Belhadj</h1>
      <h5 className="text-light">Software Developer</h5>
      <CTA />
      <HeaderSocials />

      <div className="me">
        <img src={ME} alt="me-pic" />
      </div>
      <a href="#contact" className="scroll__down">Scroll Down</a>

    </div>
  </header>
);

export default Header;
