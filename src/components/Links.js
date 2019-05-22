import React from 'react';
import { Link } from 'react-router-dom'

const Links = () => {
  return (
    <React.Fragment>

      <Link to="/"><a>Home</a></Link>
      <Link to="/sites"><a>Sites</a></Link>
      <Link to="/projects"><a>projects</a></Link>
      <Link to="/gallery"><a>gallery</a></Link>

    </React.Fragment>
  );
};

export default Links;
