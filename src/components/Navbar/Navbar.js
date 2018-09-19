import React from 'react';

const Navbar = props => {

  return (
    <nav>
      <div className="nav-wrapper">
        <ul className="flex-distribute-text">
          <li><h4>Score: {props.score}</h4></li>
          <li><h3>{props.message}</h3></li>
          <li><h4>Best Score: {props.best}</h4></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;