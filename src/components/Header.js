import React from 'react';
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header>
      <a href="/"><img src="/img/logo_holiday.png" alt="" /></a>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/destination">Destination</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/partner">Partner</Link></li>
          <li><Link className="white-orange-button" to="/login">Login</Link></li>
          <li><Link className="orange-white-button" to="/register">Register</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
