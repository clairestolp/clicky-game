import React from 'react';

const Card = props => (
  <div className="card" onClick={() => props.handleClick(props.name)}>
    <div className="card-image">
      <img 
        src={props.src}
        alt={props.name}
      />
    </div>
    <div className="card-action">
      <span>Picture Name Here</span>
      <p>{props.name}</p>
    </div>
  </div>
);

export default Card;