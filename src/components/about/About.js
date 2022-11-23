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
            <small>30+ Completed </small>
          </article>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eveniet excepturi repudiandae atque debitis, quaerat ipsa sapiente, in eos illum,
          recusandae voluptate facilis vitae suscipit voluptas! Dolore vel aliquam adipisci omnis!
        </p>

        <a href="#contact" className="btn btn-primary">Let&apos;s Talk</a>
      </div>
    </div>

  </section>
);

export default About;
