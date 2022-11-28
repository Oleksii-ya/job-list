import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import JobList from "./pages/JobList";
import DetailedJob from "./pages/DetailedJob";
import JobsProvider from "./store/JobsProvider";

function App() {
  return (
    <div className="container">
      <JobsProvider>
        <Routes>
          <Route path="/*" element={<JobList />}></Route>
          <Route path="/detail" element={<DetailedJob />}></Route>
        </Routes>
      </JobsProvider>
    </div>
  );
}

export default App;
