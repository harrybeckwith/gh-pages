import React from 'react';
import ReactDOM from 'react-dom';
import { Route, HashRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sites from "./pages/sites";
import SingleSite from "./pages/single-site";
import Projects from "./pages/projects";
import SingleProject from "./pages/single-project";
import Gallery from "./pages/gallery";
import Budget from "./pages/budget";
import "./styles/base.scss";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';

const store = createStore(reducer);

const routing = (
    <Router>
        <Header />
        <div className="container">
            <Route exact path="/" component={App} />
            <Route path="/sites" component={Sites} />
            <Route path="/single-site:current" component={SingleSite} />
            <Route path="/projects" component={Projects} />
            <Route path="/single-project:current" component={SingleProject} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/budget" component={Budget} />
        </div>
        <Footer />
    </Router >
)

ReactDOM.render(<Provider store={store}>{routing}</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
