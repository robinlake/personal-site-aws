import React from 'react';

export class AboutInfo extends React.Component {
  render(){
    return (
      <div id="aboutInfo">
        <div id="personalPhoto"><img src="./Calculator.png" alt="Personal Photo" /></div>
        <div id="aboutParagraph">Hi, I'm Robin. I'm a web developer based in Edmonton, Alberta.
          I work with LAMP and MERN stacks, and have a passion for the full stack Javascript 
          ecosystem.
        </div>
      </div>
    );
  }
}
