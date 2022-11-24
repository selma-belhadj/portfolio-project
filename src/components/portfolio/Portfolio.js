import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio11.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.png';

const Portfolio = () => (
  <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Projects</h2>
    <div className="container portfolio__container">
      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG1} alt="" />
        </div>
        <h3>Prestine Cars</h3>
        <a href="https://github.com/Prestine-Cars" className="btn" target="_blank" rel="noreferrer">Github</a>
        <a href="https://prestine-carz.herokuapp.com/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG2} alt="" />
        </div>
        <h3>Food dishes</h3>
        <a href="https://github.com/selma-belhadj/Food-dishes" className="btn" target="_blank" rel="noreferrer">Github</a>
        <a href="https://foodzz.netlify.app/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG3} alt="" />
        </div>
        <h3>Math Magicians</h3>
        <a href="https://github.com/selma-belhadj/math-magicians" className="btn" target="_blank" rel="noreferrer">Github</a>
        <a href="https://selmab-math-magicians.netlify.app/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG4} alt="" />
        </div>
        <h3>BookStore</h3>
        <a href="https://github.com/selma-belhadj/Bookstore" className="btn" target="_blank" rel="noreferrer">Github</a>
        <a href="https://selmabelhadj-bookstore.netlify.app/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG5} alt="" />
        </div>
        <h3>Cinema of Movies</h3>
        <a href="https://github.com/Tobinchilongo/JavaScript_Capstone" className="btn" target="_blank" rel="noreferrer">Github</a>
        <a href="https:github.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG5} alt="" />
        </div>
        <h3>This is a portfolio item title</h3>
        <a href="https://github.com" className="btn" target="_blank" rel="noreferrer">Github</a>
        <a href="https:github.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
      </article>
    </div>

  </section>
);

export default Portfolio;
