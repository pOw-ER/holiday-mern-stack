import { useEffect, useState } from 'react'
import './App.css';
import { Route, Switch } from 'react-router-dom'
import About from './components/About'
import Destination from './components/Destination'
import Home from './components/Home'

function App() {
  const [results, setResults] = useState([])


  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(response => response.json())
      .then(datas => {
        setResults(datas)
      })
  }, [])
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/destination" exact>
          <Destination />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        {/* <Route path="/blog/:id" render={(props) => <BlogDetails {...props} />} exact /> */}
      </Switch>

      {
        results &&
        results.map(result => {
          return <p key={result.location}>{result.location}</p>
        })
      }
    </div>
  );
}

export default App;
