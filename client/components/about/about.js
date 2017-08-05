import React from 'react';
import { AboutNav } from './aboutNav';

export class About extends React.Component {
  render(){
    return (
      <div id="about">
        <p className="sectionHeader">About Me</p>
        <AboutNav />
      </div>
    );
  }
}
