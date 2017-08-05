import React from 'react';
import Project from './project';

export class FullStack extends React.Component {
  render(){
    return (
      <div id="FullStack">
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
        <Project 
        name='project1' 
        description="This is the first project description"
        link="http://www.google.ca"/>
      </div>
    );
  }
}
