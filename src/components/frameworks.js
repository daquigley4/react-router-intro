import React from 'react';

const Frameworks = ({match, ...props}) => (
  <div>
    <h3>Hello from the Frameworks Component!</h3>
    <p> I can be found at {match.url}</p>
  </div>
)

export default Frameworks;
