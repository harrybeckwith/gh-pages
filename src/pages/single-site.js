import React from 'react';
import sites from "../content/sites.json";

class SingleSite extends React.Component {
  state = {
    sites,
    content: ""
  };

  componentWillMount() {

    const { current } = this.props.match.params
    this.setState({
      content: this.state.sites.main[current].content
    });
  }

  render() {
    return (
      <div className="overview">
        <div className="overview__container">
          a
          <div
            className="overview__img"
            style={{ backgroundImage: `url(${this.state.content.largeImg})` }}
          />

          <div className="overview__content">
            <h2 className="overview__title title--md">
              {this.state.content.title}
            </h2>

            {this.state.content.topContent.map((item, index) => (
              <p key={index} href={item} className="overview__text">
                {item}
              </p>
            ))}

            <h2 className="overview__title--md title--md">
              {this.state.content.titleTwo}
            </h2>

            <ul className="overview__code">
              {this.state.content.code.map((item, index) => (
                <li key={index} className="overview__code__item">
                  - {item}
                </li>
              ))}
            </ul>

            <h2 className="overview__title--md title--md">
              {this.state.content.titleThree}
            </h2>

            <div className="overview__links">
              {this.state.content.links.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  className="overview__links__link"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleSite;
