import React from "react";

import Jobs from "./Jobs";

const JobsContext = React.createContext(
  {
    status: false,
    message: "",
    payload: [] as Jobs[],
  }
)

export default JobsContext