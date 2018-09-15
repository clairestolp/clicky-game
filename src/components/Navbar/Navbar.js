import React from 'react';

const Navbar = props => {

  return (
    <nav>
      <div className="nav-wrapper">
        <ul className="flex-distribute-text">
          <li><h4>Score: </h4></li>
          <li><h3>Click to begin</h3></li>
          <li><h4>Best Score: </h4></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;