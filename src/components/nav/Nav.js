/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import './nav.css';

const Nav = () => (
  <nav>
    <a href="#home" className="active"><AiOutlineHome /></a>
    <a href="#about"><AiOutlineUser /></a>
    <a href="#experience"><BiBook /></a>
    <a href="#services"><RiServiceLine /></a>
    <a href="#contact"><BiMessageSquareDetail /></a>

  </nav>
);

export default Nav;
