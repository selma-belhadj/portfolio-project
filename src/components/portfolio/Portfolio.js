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
    demo: 'https://prestine-carz.onrender.com/',
    description: 'A Webapp that is used to help users rent car when they move to new countries or cities.',
    skills: ['Rails', 'React', 'Redux', 'Bootstrap', 'PostgreSQL'],
  },
  {
    id: 2,
    image: IMG2,
    title: 'Food dishes',
    github: 'https://github.com/selma-belhadj/Food-dishes',
    demo: 'https://foodzz.netlify.app/',
    description: 'A Webapp that displays a list of food dishes where the user is able to like, read more information and leave a comment about any meal.',
    skills: ['JavaScript', 'Webpack', 'Jest', 'Netlify'],
  },
  {
    id: 3,
    image: IMG3,
    title: 'Math Magicians',
    github: 'https://github.com/selma-belhadj/math-magicians',
    demo: 'https://selmab-math-magicians.netlify.app/',
    description: 'A website for all fans of mathematics that allows users to make simple calculations.',
    skills: ['React', 'JavaScript', 'CSS3', 'Netlify'],
  },
  {
    id: 4,
    image: IMG4,
    title: 'BookStore',
    github: 'https://github.com/selma-belhadj/Bookstore',
    demo: 'https://selmabelhadj-bookstore.netlify.app/',
    description: 'The Bookstore is a website that allows the user to display a list of books, add a book and remove a selected book.',
    skills: ['React', 'Redux', 'JavaScript', 'Netlify'],
  },
  {
    id: 5,
    image: IMG5,
    title: 'Cinema of Movies',
    github: 'https://github.com/Tobinchilongo/JavaScript_Capstone',
    demo: 'https://thecapstone-project-js.netlify.app/',
    description: 'A webapp that displays a list of shows where the user is able to like, read more information and leave a comment about any show.',
    skills: ['React', 'JavaScript', 'CSS3', 'Netlify'],
  },
  {
    id: 6,
    image: IMG6,
    title: 'Budget Mobile App',
    github: 'https://github.com/selma-belhadj/BudgetApp',
    demo: 'https://cash-app-dz.onrender.com/',
    description: 'A mobile webapp where the user can manage his budget gives him access to a list of transactions associated with a category allowing him to see how much money he spent and on what.',
    skills: ['Ruby', 'Rails', 'PostgreSQL', 'Render'],
  },
];

const Portfolio = () => (
  <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Projects</h2>
    <div className="container portfolio__container">
      {
            data.map(({
              id, image, title, github, demo, description,
            }) => (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-description">
                  <p>{description}</p>
                </div>
                {/* <div>
                  <ul className="portfolio__item-skills">
                    { skills.map((skill) => <li key={skill}><b>{skill}</b></li>) }
                  </ul>
                </div> */}
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
