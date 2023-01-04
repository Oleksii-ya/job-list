import React, { useContext, useState } from "react";
import JobsContext from "../../store/jobs-context";
import { useNavigate } from "react-router-dom";

import styles from "./Filtration.module.css";
import Jobs from "../../store/Jobs";

const Filtration = ({ activePage }: {
  activePage: number[];
}) => {
  const jobsCtx = useContext(JobsContext);
  const navigate = useNavigate();

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    jobsCtx.setJobs((state: any) => {
      const filtered = state.originalPayload.filter((item: Jobs) => {
        return item.title.includes(event.target.value)
      })
      activePage[0] = 1
      navigate("/1")
      return { ...state, "filteredPayload": filtered }
    })
  }

  return (
    <div>
      <span style={{ marginRight: "16px", fontWeight: 600 }}>Filtering by title</span>
      <input
        className={styles.inputPosts}
        type="text"
        onChange={inputHandler}
      ></input>
    </div>
  )
}

export default Filtration