import React from 'react';
import Layout from './components/Layout';
import './App.scss';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <header></header>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
      <div className="app">Text Here</div>
      <footer></footer>
    </>
  );
};

export default App;
