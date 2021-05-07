import React, { useState } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import About from './components/About'
import Destination from './components/Destination'
import Home from './components/Home'
import axios from 'axios'

function App() {
  // const [allResults, setAllResults] = useState([])
  const [location, setLocation] = useState('')
  const [activity, setActivity] = useState('')
  const [results, setResults] = useState([])

  // useEffect(() => {
  //   fetch('http://localhost:5000/')
  //     .then(response => response.json())
  //     .then(datas => {
  //       setAllResults(datas)
  //     })
  //     .catch(err => console.log(err))
  // }, [])
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://localhost:5000/search", { location, activity })
      // .then(response => response.json())
      .then(items => {
        // console.log(items.data);
        setResults(items.data)
        // window.location = '/destination'
      })
      .catch(err => console.log(err))


  }
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home
            handleSubmit={handleSubmit}
            location={location}
            setLocation={setLocation}
            activity={activity}
            setActivity={setActivity}
            results={results}
            setResults={setResults}
          />
        </Route>
        <Route path="/destination">
          <Destination
            handleSubmit={handleSubmit}
            location={location}
            setLocation={setLocation}
            activity={activity}
            setActivity={setActivity}
            results={results}
            setResults={setResults}
          />
        </Route>
        <Route path="/about" component={About} />
        {/* <Route path="/blog/:id" render={(props) => <BlogDetails {...props} />} exact /> */}
      </Switch>

      {/* {
        allResults &&
        allResults.map(result => {
          return <p key={result.location}>{result.location}</p>
        })
      } */}
    </div>
  );
}

export default App;
