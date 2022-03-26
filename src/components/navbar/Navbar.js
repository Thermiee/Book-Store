import React from 'react';
import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

function Navbar() {
  return (
    <nav>
      <div>
        <h1 id="logo">Bookstore CMS</h1>

        <Link to="/">Books</Link>
        <Link to="/categories">categories</Link>
      </div>
      <ImUser />
    </nav>
  );
}

export default Navbar;
