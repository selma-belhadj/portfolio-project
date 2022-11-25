/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub, FaAngellist } from 'react-icons/fa';

const HeaderSocials = () => (
  <div className="header__socials">
    <a href="https://www.linkedin.com/in/selma-belhadj/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
    <a href="https://github.com/selma-belhadj" target="_blank" rel="noreferrer">
      <FaGithub />
    </a>
    <a href="https://angel.co/u/selma-belhadj" target="_blank" rel="noreferrer">
      <FaAngellist />
    </a>
  </div>
);

export default HeaderSocials;
