import React from 'react';
import SocialIcons from '../components/SocialIcons';
import Links from '../components/Links';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends React.Component {

  // state = {
  //   activeMenu: false
  // }

  // toggleMenu = () => {
  //   this.setState({
  //     activeMenu: !this.state.activeMenu
  //   })

  // }

  render() {

    return (
      <header className={`header ${this.props.activeMenu ? "active-menu" : ""}`}>
        <h3 className="title__underline title--md title__sm-only header__title">
          Code:
        </h3>
        <div className="container-fixed">
          <div className="container">
            <div className="top-bar">
              <img
                onClick={this.props.toggleMenu}
                className="top-bar__toggle"
                src={`${
                  this.props.activeMenu
                    ? "/port/icons/close.svg"
                    : "/port/icons/menu.svg"
                  }`}
                alt="menu-icon"
              />
              <h3 className="title__underline title--md title__md-only">
                <Link to="/">Code:</Link>
              </h3>
              <div className="menu__icons">
                <SocialIcons />
              </div>
            </div>
          </div>
        </div>
        <div className="menu">
          <div className="menu__container">
            <nav className="menu__nav" onClick={this.props.toggleMenu}>
              <Links />
            </nav>
            <div className="menu__about">
              <div className="menu__about__inside">
                <img
                  className="menu__avatar"
                  src="/port/images/avatar.png"
                  alt="avatar"
                />
                <h3 className="menu__title">Hi.</h3>
                <p className="menu__desc">
                  Hello. Welcome to my portfolio, feel free to check out some my latest work as a front end developer.
                  Current working with Vue js and React js.
              </p>
                <p className="menu__desc">Feel free to contact me at <a href="mailto:harryjbeckwith@gmail.com">harryjbeckwith@gmail.com</a></p>
                <div className="menu__icons">
                  <SocialIcons />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    activeMenu: state.activeMenu
  };
};


const mapDispatchToProps = dispatch => {
  return {
    toggleMenu: () => dispatch({ type: 'TOGGLE_MENU' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);