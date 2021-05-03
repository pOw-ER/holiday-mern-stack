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
        </ul>
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </nav>
    </header>
  );
}

export default Header;
