import React from 'react';
import CTA from './CTA';
import './header.css';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => (
  <header>
    <div className="container header__container">
      <h5>Hello I&apos;m</h5>
      <h1>Selma Belhadj</h1>
      <h5 className="text-light">Fullstack developer</h5>
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
