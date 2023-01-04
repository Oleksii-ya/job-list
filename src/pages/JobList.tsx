import { useContext } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import JobsContext from "../store/jobs-context";
import Filtration from "./components/Filtration";
import JobListSlice from "./components/JobListSlice";
import Pagination from "./components/Pagination";
import jobListStyle from "./JobList.module.css";

const activePage = [1];
let postsOnPage = 5;

const JobList = () => {
  const jobsCtx = useContext(JobsContext);
  const navigate = useNavigate();

  function handlerInput(e: React.ChangeEvent<HTMLInputElement>) {
    if (+e.target.value < 1) {
      return;
    }
    activePage[0] = 1;
    postsOnPage = +e.target.value;
    navigate(`/${activePage[0]}`);
  }

  if (!jobsCtx.jobs.status) {
    return (
      <>
        <div>{jobsCtx.jobs.message}</div>
      </>
    );
  }

  const numberPages = Math.ceil(jobsCtx.jobs.filteredPayload.length / postsOnPage);

  return (
    <div className={jobListStyle.container}>
      <div>
        <span style={{ marginRight: "16px", fontWeight: 600 }}>Posts per page</span>
        <input
          value={postsOnPage}
          onChange={handlerInput}
          type="number"
          className={jobListStyle.inputPosts}
        ></input>
        <Filtration activePage={activePage} />
      </div>
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
      <Pagination
        numberPages={numberPages}
        activePage={activePage}
      ></Pagination>
    </div >
  );
};

export default JobList;
