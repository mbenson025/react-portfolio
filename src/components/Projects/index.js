import React from 'react';
import Loader from 'react-loaders';
import './index.scss';
import ProjectItem from './ProjectData';
import ProjectOne from '../../assets/images/logo3.png';

const Projects = () => {
  return (
    <>
      <div className="projects">
        <h1>My Projects</h1>
        <div classname="projectList">
          <ProjectItem className="techBlog" image={ProjectOne} />
          <ProjectItem />
        </div>
      </div>
      <Loader type="line-scale-pulse-out" />
    </>
  );
};

export default Projects;
