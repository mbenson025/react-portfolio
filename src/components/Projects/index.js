import React from 'react';
import Loader from 'react-loaders';
import './index.scss';
import ProjectItem from './ProjectItems';
import { ProjectList } from '../../helpers/ProjectList';

const Projects = () => {
  return (
    <>
      <div className="projects">
        <h1>My Projects</h1>
        <div classname="projectList">
          {ProjectList.map((project) => {
            return <ProjectItem name={project.name} image={project.image} />;
          })}
        </div>
      </div>
      <Loader type="line-scale-pulse-out" />
    </>
  );
};

export default Projects;
