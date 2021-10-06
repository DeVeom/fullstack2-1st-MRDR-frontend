import React from 'react';
import './Border.scss';

class Border extends React.Component {
  render() {
    return (
      <div className="Border">
        <div className="borderLine"></div>
        <span>또는</span>
        <div className="borderLine"></div>
      </div>
    );
  }
}

export default Border;
