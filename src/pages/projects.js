import React from 'react';
import projects from "../content/projects.json";
import Front from '../components/Front.js';

class Index extends React.Component {
  state = {
    projects,
    currentsites: '',
  };


  cardClick = (current) => {

    this.props.history.push(`/single-project${current}`)
  }

  render() {

    return (

      <div className="front">

        {this.state.projects.main.map((item, index) => (

          <Front info={item.front} key={index} curr={index} cardClick={this.cardClick} />
        ))}

      </div>
    );
  }
}

export default Index;
