import React from 'react';
import { AboutNav } from './aboutNav';

export class About extends React.Component {
  render(){
    return (
      <div id="about">
        <div className="aboutHeader">About Me</div>
        <AboutNav />
      </div>
    );
  }
}
