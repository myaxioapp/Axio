import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    
    <ul className="main-nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/About">About</Link></li>
      <li><Link to="/APARTMENTS">Apartments</Link></li>
      <li><Link to="/SEARCH">Search </Link></li>
      <li><Link to="/Invite">Invite</Link></li>
    </ul>    
  </header>
);

export default Header;