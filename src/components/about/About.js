/* eslint-disable max-len */
import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import { MdCastForEducation } from 'react-icons/md';
import ME from '../../assets/about-me1.jpg';
import './about.css';

const About = () => (
  <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About-me" />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <MdCastForEducation className="about__icon" />
            <h5>Education</h5>
            <small>Engineering degree</small>
          </article>
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>+1 Working year </small>
          </article>

          <article className="about__card">
            <VscFolderLibrary className="about__icon" />
            <h5>Projects</h5>
            <small>20+ Completed </small>
          </article>
        </div>
        <p>
          I am a full-stack software developer and my life&apos;s ambition is to use software engineering to assist environmental organisations in changing the world one line of code at a time.

          I received my Master&apos;s degree in computer science engineering from
          {' '}
          <a href="https://www.esi.dz/" target="_blank" rel="noreferrer">the Higher National Computer Science School</a>
          {' '}
          in Algeria. I am currently enrolled in
          {' '}
          <a href="https://www.microverse.org/" target="_blank" rel="noreferrer">Microverse&apos;s program</a>
          , an online remote software school. Here we study web development in an online multicultural environment. We get experience in pair programming where we use the driver/navigator method, and we get to mentor junior developers.
          My daily routine involves building projects, studying, reading articles and documentation, solving coding challenges, and networking.
          I&apos;m in the top 20% of active GitHub users in my country, which is a modest boast but one I&apos;m quite proud of.
        </p>

        <a href="#contact" className="btn btn-primary">Let&apos;s Talk</a>
      </div>
    </div>

  </section>
);

export default About;
