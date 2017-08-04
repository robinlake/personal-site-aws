import React from 'react';

import { ProjectsNav } from './projectsNav';

export class Projects extends React.Component {
  render(){
    return (
      <div id="projects">
        These are some projects
        <ProjectsNav />
      </div>
    );
  }
}
