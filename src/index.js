import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import './styles/index.css';
import './styles/App.css';

import {BrowserRouter as Router} from 'react-router-dom';


render(
  <Router>
    <App/>
  </Router>, document.getElementById('root'));
