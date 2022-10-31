import React from 'react'
import { useContext } from 'react'

import JobsContext from '../store/jobs-context'

const JobList = () => {
  const jobsCtx = useContext(JobsContext)

  if (jobsCtx.length === 0) {
    return <div>Loading...</div>
  }

  const list = jobsCtx.map((item) => {
    return <div key={item.id}>{item.id}</div>
  }
  )

  return <>{list}</>

}

export default JobList