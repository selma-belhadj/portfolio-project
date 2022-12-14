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
          Hello! My name is Selma, and I enjoy creating things that live on the Internet. I&apos;m a computer science engineer specializing in software development.
          <br />
          {' '}
          My daily routine involves building projects, studying, reading articles and documentation, solving coding challenges, and networking.
          <br />
          {' '}
          I don&apos;t like to define myself by the work I&apos;ve done. I define myself by the work I want to do. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and do interesting things that matter.
          <br />
          {' '}
          I am a passionate person who pursues her dreams, works hard, and is results-oriented. As a matter of fact, I constantly work on improving myself, seeking to achieve the best version of myself.
        </p>

        <a href="#contact" className="btn btn-primary">Let&apos;s Talk</a>
      </div>
    </div>

  </section>
);

export default About;
