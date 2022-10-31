import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'

import JobList from './pages/JobList';
import DetailedJob from './pages/DetailedJob';
import JobsProvider from './store/JobsProvider';

function App() {
  return (
    <JobsProvider>
      <Routes>
        <Route path='/' element={<JobList />}></Route>
      </Routes>
    </JobsProvider>
  )
}

export default App;
