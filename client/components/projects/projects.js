import React from 'react';

import { ProjectsNav } from './projectsNav';

export class Projects extends React.Component {
  render(){
    return (
      <div id="projects">
        <p className="projectsHeader">Development Projects</p>
        <ProjectsNav />
      </div>
    );
  }
}
