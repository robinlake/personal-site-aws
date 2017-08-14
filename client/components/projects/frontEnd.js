import React from 'react';
import Project from './project';

export class FrontEnd extends React.Component {
  render(){
    return (
      <div id="FrontEnd">
        <Project 
        name='Tic-Tac-Toe' 
        description="Play against human or computer. Optimized using Mini-Max algorithm"
        link="https://robinlake.github.io/Tic-Tac-Toe/"
        image="components/projects/images/Tic-Tac-Toe cropped.jpg"/>
        <Project 
        name='Javascript Calculator' 
        description="Perform basic calculations. No libraries required"
        link="https://robinlake.github.io/Javascript-Calculator/"
        image="components/projects/images/Calculator.jpg"/>
        <Project 
        name='Local Weather' 
        description="Display the 5 day forecast in your city"
        link="https://codepen.io/Robin1515/full/dNJZzK"
        image="components/projects/images/Weather.jpg"/>
      </div>
    );
  }
}
