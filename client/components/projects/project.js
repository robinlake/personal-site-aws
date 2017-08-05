import React from 'react';

const Project = ({name, description, link}) => {
  return (
    
      <div className="project">
        <a href={link} target="_blank">
        <p className="projectTitle">{name}</p>
        <p className="projectDescription">{description}</p>
          </a>
      </div>
  )
}

export default Project;