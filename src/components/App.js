import React, {Component} from 'react';
import {NavLink, Link, Route} from 'react-router-dom';
import Home from './home';
import JavaScript from './javascript';
import HtmlCss from './html-css';
import Frameworks from './frameworks';
import Topics from '../data.json';
import '../styles/App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      topics: Topics
    }
  }

  mainTopics = (topics) => topics.map((topic, i) => Object.keys(topic))
    .reduce((prev, curr) => prev.concat(curr))
    .map(topic=>topic.toLowerCase().replace('/','-'))


  render() {
    const { topics } = this.state;
    const topicsLinkArray = this.mainTopics(this.state.topics);
    console.log(topicsLinkArray);

    return (
      <div className='container'>
        <div className='navbar'>
          <ul>
            <li><NavLink exact activeClassName="activeLink" to="/">Home</NavLink></li>
            {topicsLinkArray.map()(topic, i) => <li key=(i)><NavLink activeClassName="activeLink" to={topic}> topic.replace('-', '&')}</NavLink></li>)}
          </ul>
        </div>
          <Route exact path="/" component={Home}/>
          <Route path="/javascript" render={(routeProps) => <JavaScript {...routeProps}{...topics[0]}/>}/>
          <Route path="/html-css" render={(routeProps) => <HtmlCss {...routeProps}{...topics[1]}/>}/>
          <Route path="/frameworks" render={(routeProps) => <Frameworks {...routeProps}{...topics[2]}/>}/>
      </div>
    );
  }
}

export default App;
