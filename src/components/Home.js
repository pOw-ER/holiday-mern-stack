// import React, { useState } from 'react';
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import HomeSection from './HomeSection'
// import axios from 'axios'

const Home = (props) => {
  // const [location, setLocation] = useState('')
  // const [activity, setActivity] = useState('')
  // const [results, setResults] = useState([])
  // props.handleSubmit = (event) => {
  //   event.preventDefault();

  //   axios.post("http://localhost:5000/search", { location, activity })
  //     // .then(response => response.json())
  //     .then(items => {
  //       // console.log(items.data);
  //       props.setResults(items.data)
  //     })

  //   window.location = '/destination'
  // }
  return (
    <div>
      <Header />
      {props.results.map(result => {
        return <li key={result._id}>{result.location}</li>
      })}
      <Hero
        handleSubmit={props.handleSubmit}
        location={props.location}
        setLocation={props.setLocation}
        activity={props.activity}
        setActivity={props.setActivity}
        results={props.results}
        setResults={props.setResults}
      />
      <main>
        <HomeSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
