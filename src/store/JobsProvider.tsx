import React, { useEffect, useState } from 'react'

import JobsContext from './jobs-context'

const JobsProvider = (props: any) => {
  const [jobs, setJobs] = useState([])
  useEffect(() => {
    fetch('https://data-api-ff2f1-default-rtdb.europe-west1.firebasedatabase.app/data.json')
    .then(response => response.json())
    .then(json => setJobs(json))
  }, [])

  return (
    <JobsContext.Provider value={jobs}>
      {props.children}
    </JobsContext.Provider>
  )
}

export default JobsProvider