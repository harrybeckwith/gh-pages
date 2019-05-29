import React from 'react';
import projects from "../content/projects.json";
import { NavLink } from 'react-router-dom';


class SingleSite extends React.Component {
  state = {
    projects,
    content: '',
  }

  componentWillMount() {

    const { current } = this.props.match.params

    this.setState({
      content: this.state.projects.main[current].content
    })

  }

  render() {
    let links;

    if (this.state.content.links) {
      links = this.state.content.links.map((item, index) => (
        <a key={index} href={item.link} target="_blank" className="overview__links__link">{item.text}</a>
      ))
    }

    if (this.state.content.linksInernal) {

      links = this.state.content.linksInernal.map((item, index) => (
        <NavLink to={`${item.link}`}>{item.text}</NavLink>
      ))


    }


    return (


      <div className="overview">

        <div className="overview__container">

          <div className="overview__img" style={{ backgroundImage: `url(${this.state.content.largeImg})` }}>

            {/* <img className="overview__img__pic" src={this.state.content.largeImg} /> */}

          </div>

          <div className="overview__content">

            <h2 className="overview__title title--md">
              {this.state.content.title}
            </h2>

            {this.state.content.topContent.map((item, index) => (
              <p key={index} href={item} className="overview__text">{item}</p>
            ))}

            <h2 className="overview__title--md title--md">
              {this.state.content.titleTwo}
            </h2>

            <ul className="overview__code">
              {this.state.content.code.map((item, index) => (

                <li key={index} className="overview__code__item">- {item}</li>

              ))}
            </ul>

            <div className="overview__links">
              <h2 className="overview__title--md title--md">links</h2>
              {links}
            </div>

          </div>

        </div>

      </div>

    );
  }
}

export default SingleSite;
