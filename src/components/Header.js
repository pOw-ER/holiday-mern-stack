import React, { useState } from 'react';
import { Link } from 'react-router-dom'


const Header = () => {
  const [isOpen, setOpen] = useState(false)

  const openMenü = (event) => {
    // event.preventDefault();
    console.log(event.target.value);
    if (isOpen) {
      event.target.previousElementSibling.classList.remove('menu-change')
      event.target.classList.add('fa-bars')
      event.target.classList.remove('fa-times')
      setOpen(false)
    } else {
      event.target.previousElementSibling.classList.add('menu-change')
      event.target.classList.remove('fa-bars')
      event.target.classList.add('fa-times')
      setOpen(true)
    }

  }
  return (
    <header>
      <a href="/"><img src="/img/logo_holiday.png" alt="" /></a>
      <nav id="navbar-menü">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/destination">Destination</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/partner">Partner</Link></li>
          <li><Link className="white-orange-button" to="/login">Login</Link></li>
          <li><Link className="orange-white-button" to="/register">Register</Link></li>
        </ul>
      </nav>
      <i className="fas fa-bars" onClick={(event) => openMenü(event)}></i>
      {/* <i class="fas fa-times"></i> */}
    </header>

  );
}

export default Header;
