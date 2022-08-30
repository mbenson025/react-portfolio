import React from 'react';
import Loader from 'react-loaders';
import './index.scss';
import ProjectItem from './ProjectItems';
import { projectList } from '../../helpers/ProjectList';

const Projects = () => {
  return (
    <>
      <div className="projects">
        <h1>My Projects</h1>
        <div className="projectList">
          {projectList.map((project, idx) => {
            return (
              <ProjectItem id={idx} name={project.name} image={project.image} />
            );
          })}
        </div>
      </div>
      <Loader type="line-scale-pulse-out" />
    </>
  );
};

export default Projects;
