import React from 'react';
import Header from './Header'
const Home = () => {
  return (
    <div>
      <Header />
      <section id="hero">
        <h1>Explore and</h1>
        <h1>Travel</h1>
        <p>Holiday Finder</p>
        <form action="/find/holiday">
          <select id="countries" name="countries">
            <option value="location">Location</option>
            <option value="germany">Germany</option>
            <option value="indonesia">Indonesia</option>
            <option value="russia">Russia</option>
          </select>
          <select id="activities" name="activities">
            <option value="activities">Activity</option>
            <option value="germany">Germany</option>
            <option value="indonesia">Indonesia</option>
            <option value="russia">Russia</option>
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
          <a href="https://www.twitter.com"><i class="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com"><i class="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.linkedin.com"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://www.youtube.com"><i class="fab fa-youtube"></i></a>
        </section>
      </footer>
    </div>
  );
}

export default Home;
