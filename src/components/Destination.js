import React, { useContext } from 'react';
import Header from './Header';
import axios from 'axios'
import appContext from '../contexts/appContext'

const Destination = () => {
  const { location, setLocation, activity, setActivity, results, setResults } = useContext(appContext)
  // const [location, setLocation] = useState('')
  // const [activity, setActivity] = useState('')
  // const [results, setResults] = useState([])
  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post("http://localhost:5000/search", { location, activity })
      // .then(response => response.json())
      .then(items => {
        // console.log(items.data);
        setResults(items.data)
      })

    // window.location = '/destination'
  }
  return (
    <div>
      <Header />
      <section>
        <h1>hello destination</h1>
        <section id="hero">
          <h1>Explore and</h1>
          <h1>Travel</h1>
          <p>Holiday Finder</p>
          <form onSubmit={(event) => handleSubmit(event)}>
            <select id="countries" name="countries" onChange={(e) => setLocation(e.target.value)}>
              <option value="">Location</option>
              <option value="Germany">Germany</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Russia">Russia</option>
              <option value="Netherland">Netherland</option>
            </select>
            <select id="activities" name="activities" onChange={(e) => setActivity(e.target.value)}>
              <option value="">Activity</option>
              <option value="Eating">Eating</option>
              <option value="Drinking">Drinking</option>
              <option value="Smoking">Smoking</option>
              <option value="Yoga">Yoga</option>
            </select><br />
            <input type="submit" value="Explore" />
          </form>
        </section>
        {results.map(result => {
          return <li key={result._id}>{result.location}</li>
        })}
      </section>
    </div>
  );
}

export default Destination;
