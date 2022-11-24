import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpeg';
import AVTR2 from '../../assets/avatar2.png';
import AVTR3 from '../../assets/avatar3.jpeg';
import AVTR4 from '../../assets/avatar4.jpeg';

const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: 'Vahan Khachvankian ',
    review: "Selma belongs to such people who happily combine the best human and professional qualities. As a professional, she approaches each task very carefully, which she has to solve, sparing no effort. And as a person, she is always ready to give advice, to come to the help, even no matter how busy she herself is at the moment.As a coding partner, I have seen much of examples of her developer talent and was impressed by her diligence, professionalism, and work ethic with a positive attitude. I have more to say about her character. As a person, she so is sociable, kind, and cooperative which makes her beloved by fellow students of her batch and also her colleagues. Her integrity and regard for rules and regulations are beyond reproach. Given all these good conducts of her, it is obvious that working with Selma is easy and convenient. Selma is a fantastic software engineer and her passion for coding her a pleasure to work with. We pair-programmed extensively together while enrolled in a software development program, and in that time her work ethic blew me away. Selma views writing clean, accessible code as a calling, and she's great at identifying areas where we can improve the work. The interest and motivation she showed in the fields of computing specifically in Software Engineering, Software Development, I feel it makes her an ideal to work as a full-stack developer as well as pursue her higher education in the field of computing.",
  },
  {
    id: 2,
    avatar: AVTR2,
    name: 'Omar Salem',
    review: "It was a tremendous pleasure to work with Selma. When you actually get to know her, you'll discover an amazing person with outstanding abilities! Her zeal and commitment were both inspiring and motivating to me. Selma has always struck me as one of the most productive teammates I've ever had the pleasure of working with.",
  },
  {
    id: 3,
    avatar: AVTR3,
    name: 'Mike Chibundu Kanu',
    review: "Selma is a very nice person, She works efficiently on coding projects, she strives to always write exceptionally clean codes and she is always ready to learn. She is humble, works well with teams, even if it's a diverse team. I really enjoyed working with her on the various projects, I was opportune to be her coding partner. She has a sense of bringing life to the team in other to work with joy and smiles on our faces. I can recommend her any day at any time. Here is my email for further questions about this awesome person (Selma): Kanumikechibundu@gmail.com",
  },
  {
    id: 4,
    avatar: AVTR4,
    name: 'Samuel ChimfwembeSamuel Chimfwembe',
    review: 'Selma is a very dedicated developer who is highly technically skilled. We worked together on several React projects and throughout that time, she demonstrated excellent knowledge of JavaScript. Likewise, she was quick to pick up new concepts and skills.',
  },
];

const Testimonials = () => (
  <section id="testimonials">
    <h5>Review From Mates</h5>
    <h2>Testimonials</h2>
    <div className="container testimonials__container">
      {
            data.map(({
              id, avatar, name, review,
            }) => (
              <article key={id} className="testimonial">
                <div className="mate__avatar">
                  <img src={avatar} alt="Mate Avatar" />
                  <h5>{name}</h5>
                  <small className="mate__review">{review}</small>
                </div>
              </article>
            ))
        }
    </div>
  </section>
);

export default Testimonials;
