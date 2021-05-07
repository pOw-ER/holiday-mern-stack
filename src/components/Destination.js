// import React, { useContext } from 'react';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
// import axios from 'axios'

const Destination = (props) => {
  // const [location, setLocation] = useState('')
  // const [activity, setActivity] = useState('')
  // const [results, setResults] = useState([])
  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   axios.post("http://localhost:5000/search", { props.location, props.activity })
  //     // .then(response => response.json())
  //     .then(items => {
  //       // console.log(items.data);
  //       props.setResults(items.data)
  //     })

  //   // window.location = '/destination'
  // }
  return (
    <div>
      <Header />
      <section>
        <Hero
          handleSubmit={props.handleSubmit}
          location={props.location}
          setLocation={props.setLocation}
          activity={props.activity}
          setActivity={props.setActivity}
          results={props.results}
          setResults={props.setResults}
        />
        {props.results &&
          props.results.map(result => {
            return (
              <div key={result._id}>
                <li>{result.location}</li>
                <li>{result.activity}</li>
              </div>

            )
          })}
      </section>
      <Footer />
    </div>
  );
}

export default Destination;
