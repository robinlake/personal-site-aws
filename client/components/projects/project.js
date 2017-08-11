import React from 'react';

const Project = ({name, description, link, image}) => {
  return (
    
      <div className="project">
        <a href={link} target="_blank">
          <p className="projectTitle">{name}</p>
          <img src={image} className="projectImage"></img>
          <p className="projectDescription">{description}</p>
          </a>
      </div>
  )
}

export default Project;