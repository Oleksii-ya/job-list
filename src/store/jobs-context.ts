import React from "react";

import Jobs from "./Jobs";

const JobsContext = React.createContext({
  jobs: {
    status: false,
    message: "",
    originalPayload: [] as Jobs[],
    filteredPayload: [] as Jobs[]
  },
  setJobs: null as any
}
)

export default JobsContext