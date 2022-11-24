import React from 'react';
import './services.css';
import { GiCheckMark } from 'react-icons/gi';

const Services = () => (
  <section id="services">
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className="container services__container">
      <article className="service">
        <div className="head__service">
          <h3>UI/UX design</h3>
        </div>
        <ul className="service__list">
          <li>
            <GiCheckMark className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <GiCheckMark className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <GiCheckMark className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <GiCheckMark className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <GiCheckMark className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <GiCheckMark className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
        </ul>
      </article>
      {/* End of UI/UX Design */}

      <article className="service">
        <div className="head__service">
          <h3>Web develepement</h3>
        </div>
        <ul className="service__list">
          <li>
            <GiCheckMark className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <GiCheckMark className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <GiCheckMark className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <GiCheckMark className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <GiCheckMark className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <GiCheckMark className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
        </ul>
      </article>
      {/* End of Web develepement */}

      <article className="service">
        <div className="head__service">
          <h3>Content Creation</h3>
        </div>
        <ul className="service__list">
          <li>
            <GiCheckMark className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <GiCheckMark className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <GiCheckMark className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <GiCheckMark className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <GiCheckMark className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
          <li>
            <GiCheckMark className="service__list-icon" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
        </ul>
      </article>
      {/* End of Content Creation */}
    </div>
  </section>
);

export default Services;
