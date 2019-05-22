import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (

    <div className="home">
      <img
        class="home__img"
        src="/images/gallery/croatia/4.jpg"
        alt=""
      />
      <div className="home__content">
        <div className="home__content__title">
          <h2>Hello.</h2>
        </div>
        <div className="home__content__intro">
          <p>
            My name is Harry, i am a Front-end Developer. I create awesome
            websites. I have 5 years commercial experience providing front-end
            development, producing high quality responsive websites and
            exceptional user experience.
            </p>
          <p>
            Take a look at my

            <Link to="/sites" tag="a" className="home__link">work,</Link>
            <Link to="/projects" tag="a" className="home__link">projects,</Link>

            or get in
              <a className="home__link" href="mailto:harryjbeckwith@gmail.com">
              touch!
              </a>
          </p>
          <p>Current skills: </p>
          <p>
            - Responsive - HTML/CSS - JavaScript - Vue Js - React Js - SASS -
            Git - Agile
            </p>
        </div>
      </div>
    </div>
  );
};

export default Index;

