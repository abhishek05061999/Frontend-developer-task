// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProjectsTable from './components/ProjectsTable';
import ProjectDetailsTable from './components/ProjectDetailsTable';
import Editor from './components/Editor';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<ProjectsTable />} />
        <Route path="/page2" element={<ProjectDetailsTable />} />
        <Route path="/page3" element={<Editor />} />
      </Routes>
    </Router>
  );
}

export default App;
