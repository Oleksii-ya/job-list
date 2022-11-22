import React, { useEffect, useState } from "react";

import JobsContext from "./jobs-context";

const JobsProvider = (props: any) => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(
      "https://data-api-ff2f1-default-rtdb.europe-west1.firebasedatabase.app/data.json"
    )
      .then((response) => {
        if (!response.ok || response.json() === null) {
          throw new Error("Could not fetch jobs 1");
        }
        return response.json();
      })
      .then((json) => setJobs(json))
      .catch((err) => {
        console.error("Could not fetch jobs ccccccccccccccccccc");
      });
  }, []);

  return (
    <JobsContext.Provider value={jobs}>{props.children}</JobsContext.Provider>
  );
};

export default JobsProvider;
