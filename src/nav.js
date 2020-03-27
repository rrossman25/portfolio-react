import React from 'react';
import './projects.css';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav id = 'navbar' className = 'nav'>
        <Link to = '/home' className = 'nav-link'>Home</Link>
        <a href = 'http://online.fliphtml5.com/whqtm/eiyq/' className = 'nav-link' rel = 'noopener noreferrer' target = '_blank'>Resume</a>
    </nav>
  );
}

export default Nav;