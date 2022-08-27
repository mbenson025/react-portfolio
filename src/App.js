import React from 'react';
import Layout from './components/Layout';
import './App.scss';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  );
};

export default App;
