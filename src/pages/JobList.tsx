import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import JobsContext from "../store/jobs-context";
import JobListSlice from "./components/JobListSlice";
import Pagination from "./components/Pagination";
import jobListStyle from "./JobList.module.css";

const JobList = () => {
  const jobsCtx = useContext(JobsContext);
  const postsOnPage = 5;
  const numberPages: number = Math.ceil(jobsCtx.length / postsOnPage);

  return (
    <div className={jobListStyle.container}>
      <div>
        <Routes>
          <Route
            path=""
            element={<JobListSlice postsOnPage={postsOnPage} />}
          ></Route>
          <Route
            path=":page"
            element={<JobListSlice postsOnPage={postsOnPage} />}
          ></Route>
        </Routes>
      </div>
      <Pagination numberPages={numberPages}></Pagination>
    </div>
  );
};

export default JobList;
