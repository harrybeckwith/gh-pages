import React from 'react';
import Layout from "../components/MyLayout.js";
import projects from "../static/content/projects.json";
import Front from '../components/Front.js';
import Router from "next/router";

class Index extends React.Component {
  state = {
    projects,
    currentsites: '',
  };


  cardClick = (current) => {

    Router.push({
      pathname: '/single-project',
      query: { current }
    })
  }

  render() {

    return (
      <Layout>

        <div className="front">

          {this.state.projects.main.map((item, index) => (

            <Front info={item.front} key={index} curr={index} cardClick={this.cardClick} />
          ))}

        </div>

      </Layout>
    );
  }
}

export default Index;
