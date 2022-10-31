import React from "react";

import Jobs from "./Jobs";

const JobsContext = React.createContext(
  [new Jobs()]
)

export default JobsContext