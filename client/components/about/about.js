import React from 'react';
import { AboutNav } from './aboutNav';

export class About extends React.Component {
  render(){
    return (
      <div id="about">
        <AboutNav />
        This is the about section
      </div>
    );
  }
}
