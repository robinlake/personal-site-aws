import React from 'react';

var ModalWindow = React.createClass ({
  render(){
    return(
      <div>
        <img src="/components/about/resumeInfo/Resume-Large-min.png" className="resumeSmall" data-target="#loginModal" data-toggle="modal"></img>
        <div className="modal" id="loginModal" tabIndex="-1">
          <img className="resume-modal" src="/components/about/resumeInfo/Resume-Large-min.png" data-target="#loginModal" data-toggle="modal"></img>
        </div>
      </div>
    );
  }
});

export default ModalWindow;
