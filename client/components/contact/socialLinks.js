import React from 'react';

export class SocialLinks extends React.Component{
  render(){
    return (
      <div id="linkList">
        <a href="https://github.com/robinlake" target="_blank"><img className="mediaLink linkedin" src="/components/contact/linkedin-clear.png"></img></a>
        <a href="https://www.linkedin.com/in/robin-lake-9a9193137/" target="_blank"><img className="mediaLink github" src="/components/contact/github-clear.png"></img></a>
      </div>

    );
  }
}