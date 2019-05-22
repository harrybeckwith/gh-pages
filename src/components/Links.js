import React from 'react';
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <React.Fragment>

      <Link to="/">Home</Link>
      <Link to="/sites">Sites</Link>
      <Link to="/projects">projects</Link>
      <Link to="/gallery">gallery</Link>

    </React.Fragment>
  );
};

export default Links;
