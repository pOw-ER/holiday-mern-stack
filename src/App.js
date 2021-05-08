import React, { useState } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import About from './components/About'
import Destination from './components/Destination'
import Home from './components/Home'
import axios from 'axios'
import Partner from './components/Partner';

function App() {
  const [location, setLocation] = useState('')
  const [activity, setActivity] = useState('')
  const [results, setResults] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.nativeEvent.submitter.value === 'Explore') {
      axios.post("http://localhost:5000/search", { location, activity })
        // .then(response => response.json())
        .then(items => {
          // console.log(items.data);
          setResults(items.data)
          // window.location = '/destination'
        })
        .catch(err => console.log(err))
    } else {
      event.preventDefault();
      fetch('http://localhost:5000/')
        .then(response => response.json())
        .then(datas => {
          setResults(datas)
        })
        .catch(err => console.log(err))
    }


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
        <Route path="/partner">
          <Partner
            handleSubmit={handleSubmit}
            location={location}
            setLocation={setLocation}
            activity={activity}
            setActivity={setActivity}
            results={results}
            setResults={setResults}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
