import React from 'react';

export class ResumeInfo extends React.Component {
  render(){
    return (
      <div id="resumeInfo">
        <h2>Downloadable Resume</h2>
        <form method="get" action="./client/components/about/resumeInfo/Resume-Large-min.pdf">
          <button type="submit">Download</button>
        </form>
        <a href="Resume-Large-min.pdf">Download</a>
      </div>
    );
  }
}
