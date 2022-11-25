import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.png';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.png';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Prestine Cars',
    github: 'https://github.com/Prestine-Cars',
    demo: 'https://prestine-carz.herokuapp.com/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Food dishes',
    github: 'https://github.com/selma-belhadj/Food-dishes',
    demo: 'https://foodzz.netlify.app/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Math Magicians',
    github: 'https://github.com/selma-belhadj/math-magicians',
    demo: 'https://selmab-math-magicians.netlify.app/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'BookStore',
    github: 'https://github.com/selma-belhadj/Bookstore',
    demo: 'https://selmabelhadj-bookstore.netlify.app/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Cinema of Movies',
    github: 'https://github.com/Tobinchilongo/JavaScript_Capstone',
    demo: 'https://thecapstone-project-js.netlify.app/',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Budget App',
    github: 'https://github.com/selma-belhadj/BudgetApp',
    demo: 'https://afternoon-anchorage-61931.herokuapp.com/',
  },
];

const Portfolio = () => (
  <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Projects</h2>
    <div className="container portfolio__container">
      {
            data.map(({
              id, image, title, github, demo,
            }) => (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank" rel="noreferrer">Github</a>
                  <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
                </div>
              </article>
            ))
          }
    </div>
  </section>
);

export default Portfolio;
