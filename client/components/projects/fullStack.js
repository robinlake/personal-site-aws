import React from 'react';
import Project from './project';

export class FullStack extends React.Component {
  render(){
    return (
      <div id="FullStack">
        <Project 
        name='Quotes App' 
        description="Browse quotes database. Built with PHP, Laravel and MySQL"
        link="https://laravel-quotes.herokuapp.com/"
        image="components/projects/images/quotes.jpg" />
        <Project 
        name='Image Search Metadata' 
        description="Custom image data using Google API. Made with React.js, Node.js, Express.js, and MongoDB"
        link="https://img-data.herokuapp.com"
        image="components/projects/images/image-search.jpg" />
        <Project 
        name='Polls App (in progress)' 
        description="Create and vote on custom polls. Made with React/Redux, Node.js, and PostgreSQL"
        link="http://www.google.ca"
        image="components/projects/images/polls.jpg" />
      </div>
    );
  }
}
