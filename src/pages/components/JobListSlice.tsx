import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import JobsContext from "../../store/jobs-context";
import styles from "./JobListSlice.module.css";
import starIcon from "../../assets/star.svg";

const JobListSlice = ({ postsOnPage }: { postsOnPage: number }) => {
  const jobsCtx = useContext(JobsContext);
  const { page } = useParams();

  let postSlice = jobsCtx.payload.slice(0, postsOnPage);
  if (page) {
    const start = (+page - 1) * postsOnPage;
    postSlice = jobsCtx.payload.slice(start, start + postsOnPage);
  }

  return (
    <>
      {postSlice.map((item) => {
        return (
          <div key={item.id} className={styles.postWrapper}>
            <div>
              <img
                className={styles.officeIcon}
                src={item.pictures[0]}
                alt="icon"
              />
            </div>
            <div>{item.title}</div>
            <div>
              <img src={starIcon} alt="icon" />
              {item.title}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default JobListSlice;
