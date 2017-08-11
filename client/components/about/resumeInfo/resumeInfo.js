import React from 'react';
import ModalWindow from './modal';

export class ResumeInfo extends React.Component {
  render(){
    return (
      <div id="resumeInfo">
        <h2>Downloadable Resume</h2>
        <ModalWindow />
        <form method="get" action="./components/about/resumeInfo/Resume-Large-min.pdf">
          <button type="submit" className="btn btn-primary">Download</button>
        </form>
      </div>
    );
  }
}
