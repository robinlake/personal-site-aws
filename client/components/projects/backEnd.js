import React from 'react';
import Project from './project';

export class BackEnd extends React.Component {
  render(){
    return (
      <div id="BackEnd">
        <Project 
        name='Request Parser' 
        description="Displays user data based on HTTP request"
        link="https://request-header-parser-rlake.herokuapp.com/"
        image="components/projects/images/request-parser.jpg"/>
        <Project 
        name='Timestamp Microservice' 
        description="Checks a string for a Unix or natural language date"
        link="https://timestamp-rlake.herokuapp.com/"
        image="components/projects/images/Timestamp.jpg"/>
        <Project 
        name='URL Shortener' 
        description="Creates a shortened link for a given URL"
        link="https://so-short.herokuapp.com/"
        image="components/projects/images/URL-shortener.jpg"/>
        <Project 
        name='File Size' 
        description="Returns The size in bytes of a given file"
        link="https://file-size-parser.herokuapp.com/"
        image="components/projects/images/file-size-parser.jpg"/>
      </div>
    );
  }
}
