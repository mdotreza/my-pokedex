import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
      <nav>
          <ul className="nav-links">
              <Link className="nav-links" to ="/Mypokemon">
                <li>My Pokemon</li>
              </Link>
              <li><h3>Pokedex</h3></li>
              <Link className="nav-links" to ="/pokemon">
                <li> Pokemon</li>
              </Link>
          </ul>
      </nav>
  );
}

export default Nav;
