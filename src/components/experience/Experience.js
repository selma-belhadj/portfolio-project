import React from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => (
  <section id="experience">
    <h5> What Skills I Have </h5>
    <h2>My Experience</h2>
    <div className="container experience__container">
      <div className="experience_frontend">
        <h3>Frontend Developement</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Javascript</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Tailwind</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>React</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Redux</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
        </div>
      </div>
      {/* End of Frontend */}
      <div className="experience_backend">
        <h3>Backend Developement</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Ruby</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Ruby on Rails</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Python</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>Django</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
              <h4>MySQL</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
