import React from 'react';
import './index.scss';
import { useParams } from 'react-router-dom';
import { projectList } from '../../helpers/ProjectList';

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = projectList[id];
  return (
    <>
      <div className="project">
        <h1>{project.name}</h1>
        <img src={project.image} alt="Application Display" />
        <p>
          <strong>Skills:</strong> {project.skills}
        </p>
        <div className="links">
          <a
            target="_blank"
            rel="noreferrer"
            href={project.repo}
            className="flat-button"
          >
            <strong>GitHub</strong>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={project.deployed}
            className="flat-button"
          >
            <strong>Live App</strong>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectDisplay;
