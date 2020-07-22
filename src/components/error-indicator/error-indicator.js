import React from 'react';

import './error-indicator.css';
// import icon from './icon.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      {/* <img src={icon} alt="error icon"/> */}
      <span className="boom">OOPS! NOTHING WAS FOUND</span>
      <span>
        something has gone terribly wrong
      </span>
      <span>
        (but we already fix it)
      </span>
    </div>
  );
}

export default ErrorIndicator;