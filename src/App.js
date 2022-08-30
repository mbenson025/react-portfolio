import React from 'react';
import Layout from './components/Layout';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import ProjectDisplay from './components/ProjectDisplay';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="project/:id" element={<ProjectDisplay />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
