import React, {Component} from 'react';
import {Route} from 'react-router-dom';
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

  render() {
    return (
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/javascript" component={JavaScript}/>
        <Route path="/html-css" component={HtmlCss}/>
        <Route path="/frameworks" component={Frameworks}/>
      </div>
    );
  }
}

export default App;
