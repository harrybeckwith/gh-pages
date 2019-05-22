import React from 'react';

const SocialIcons = () => {
  return (
    <React.Fragment>
      <a
        href="https://www.instagram.com/harry_j_beckwith/?hl=en"
        target="_blank"
      >
        <img
          className="menu__icons__icon"
          src="/static/icons/instagram-logo.svg"
          alt="instagram logo"
        />
      </a>
      <a
        href="https://github.com/harrybeckwith"
        target="_blank"
      >
        <img
          className="menu__icons__icon"
          src="/static/icons/github-logo.svg"
          alt="github logo"
        />
      </a>
      <a
        href="https://medium.com/@harrybeckwith"
        target="_blank"
      >
        <img
          className="menu__icons__icon"
          src="/static/icons/medium-logo.svg"
          alt="medium logo"
        />
      </a>
    </React.Fragment>
  )
}

export default SocialIcons;