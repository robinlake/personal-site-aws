import React from 'react';

var ModalWindow = React.createClass ({
  render(){
    return(
      <div>
        <img src="/components/about/resumeInfo/resume.jpg" className="resumeSmall" data-target="#loginModal" data-toggle="modal"></img>
        <div className="modal" id="loginModal" tabIndex="-1">
          <img src="/components/about/resumeInfo/resume.jpg" data-target="#loginModal" data-toggle="modal"></img>
        </div>
      </div>
    );
  }
});

export default ModalWindow;
