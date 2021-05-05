import { useState } from 'react'
import AppContext from './appContext'

const AppStates = (props) => {
  const [location, setLocation] = useState('')
  const [activity, setActivity] = useState('')
  const [results, setResults] = useState([])

  return (
    <AppContext.Provider
      value={{
        location,
        setLocation,
        activity,
        setActivity,
        results,
        setResults
      }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppStates;
