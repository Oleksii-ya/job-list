import React, { useEffect, useState } from 'react'

import JobsContext from './jobs-context'
import Jobs from './Jobs'

const JobsProvider = (props: any) => {
  const [jobs, setJobs] = useState([])
  useEffect(() => {
    fetch('https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu')
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