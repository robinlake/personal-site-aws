import React from 'react';
import Project from './project';

export class FrontEnd extends React.Component {
  render(){
    return (
      <div id="FrontEnd">
        <Project 
        name='project1' 
        description="This is the first project description"
        link="http://www.google.ca"/>
        <Project 
        name='project1' 
        description="This is the first project description"
        link="http://www.google.ca"/>
        <Project 
        name='project1' 
        description="This is the first project description"
        link="http://www.google.ca"/>
      </div>
    );
  }
}
