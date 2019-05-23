import React from 'react';
import sites from "../content/sites.json";
import Front from '../components/Front.js';


class Index extends React.Component {
  state = {
    sites,
    currentsites: '',
  };


  cardClick = (current) => {

    this.props.history.push(`/single-site${current}`)


  }

  render() {

    return (

      <div className="front">

        {this.state.sites.main.map((item, index) => (

          <Front info={item.front} key={index} curr={index} cardClick={this.cardClick} />
        ))}

      </div>

    );
  }
}

export default Index;
