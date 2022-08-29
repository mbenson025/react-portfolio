import React from 'react';
import Loader from 'react-loaders';
import './index.scss';
import ProjectItem from './ProjectData';

const Projects = () => {
  return (
    <>
      <div className="projects">
        <h1>My Projects</h1>
        <div classname="projectList">
          <ProjectItem />
          <ProjectItem />
        </div>
      </div>
      <Loader type="line-scale-pulse-out" />
    </>
  );
};

export default Projects;
