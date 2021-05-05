import React, { useEffect, useState, useContext } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import About from './components/About'
import Destination from './components/Destination'
import Home from './components/Home'
import appContext from './contexts/appContext'
import axios from 'axios'

function App() {
  const [allResults, setAllResults] = useState([])
  const { location, activity, results, setResults } = useContext(appContext)

  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(response => response.json())
      .then(datas => {
        setAllResults(datas)
      })
      .catch(err => console.log(err))
  }, [])
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://localhost:5000/search", { location, activity })
      // .then(response => response.json())
      .then(items => {
        // console.log(items.data);
        setResults(items.data)
      })
      .catch(err => console.log(err))

    // window.location = '/destination'
  }
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} handleSubmit={handleSubmit} />
        <Route path="/destination" handleSubmit={handleSubmit}>
          <Destination {...results} />
        </Route>
        <Route path="/about" component={About} />
        {/* <Route path="/blog/:id" render={(props) => <BlogDetails {...props} />} exact /> */}
      </Switch>

      {
        allResults &&
        allResults.map(result => {
          return <p key={result.location}>{result.location}</p>
        })
      }
    </div>
  );
}

export default App;
