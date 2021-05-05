import React, { useContext } from 'react';
import Header from './Header'
// import axios from 'axios'
import appContext from '../contexts/appContext'

const Home = (props) => {
  const { location, setLocation, activity, setActivity, results, setResults } = useContext(appContext)
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
      {results.map(result => {
        return <li key={result._id}>{result.location}</li>
      })}
      <section id="hero">
        <h1>Explore and</h1>
        <h1>Travel</h1>
        <p>Holiday Finder</p>
        <form onSubmit={(event) => props.handleSubmit(event)}>
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
      <main>
        <section>
          <img src="" alt="" />
          <div>
            <h2>A new way to explore the world </h2>
            <p>For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect
trip, but now, they can also let Lonely Planet Experiences lead the way</p>
            <a href="/learnmore">Learn More</a>
          </div>
        </section>
      </main>
      <footer>
        <section id="footer-nav">
          <div>
            <div>
              <img src="/img/logo_holiday.png" alt="" />
            </div>
            <p>Plan and book your perfect trip with
            expert advice, travel tips destination
              information from us</p>
            <p>© 2020 Thousand Sunny. All rights reserved</p>
          </div>
          <div>
            <h4>Destinations</h4>
            <p>Africa</p>
            <p>Antarctica</p>
            <p>Asia</p>
            <p>Europe</p>
            <p>America</p>
          </div>
          <div>
            <h4>Shop</h4>
            <p>Destination Guides</p>
            <p>Pictorial & Gifts</p>
            <p>Special Offers</p>
            <p>Delivery Times</p>
            <p>FAQs</p>
          </div>
          <div>
            <h4>Interests</h4>
            <p>Adventure Travel</p>
            <p>Art And Culture</p>
            <p>Wildlife And Nature</p>
            <p>Family Holidays</p>
            <p>Food And Drink</p>
          </div>
        </section>
        <section id="social-media">
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://www.youtube.com" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
        </section>
      </footer>
    </div>
  );
}

export default Home;
