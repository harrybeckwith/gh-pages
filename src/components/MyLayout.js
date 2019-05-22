import Header from "./Header";
import Footer from "./Footer";
import "../styles/base.scss";

import React from "react";

class Layout extends React.Component {
  state = {
    activeMenu: false
  };

  toggleMenu = () => {
    this.setState({
      activeMenu: !this.state.activeMenu
    });
  };

  render() {
    return (
      <div>
        <Header
          toggleMenu={this.toggleMenu}
          activeMenu={this.state.activeMenu}
        />
        <div className="container">
        {this.props.children}
        </div>
   
        <Footer />
      </div>
    );
  }
}

export default Layout;
