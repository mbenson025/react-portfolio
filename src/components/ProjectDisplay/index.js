import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDisplay = () => {
  const { id } = useParams();
  return (
    <>
      <div>{id}</div>
    </>
  );
};

export default ProjectDisplay;
