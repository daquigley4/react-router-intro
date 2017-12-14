import React from 'react';

const JavaScript = ({match, ...props}) => (
  <div>
    <h3>Hello from the JavaScript Component!</h3>
    <p> I can be found at {match.url}</p>
  </div>
)

export default JavaScript;
