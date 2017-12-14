import React from 'react';
import {Link} from 'react-router-dom';

const HtmlCss = ({match, ...props}) => (
  <div>
    <ul>
    {
      props['HTML/CSS'].map((topic, index) => (
        <li key={index}>
          <Link to={`${match.path}/${topic}`}>{topic}</Link>
        </li>)
      )
    }
    </ul>
  </div>
)

export default HtmlCss;
