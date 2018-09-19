import React from 'react';

const Card = props => (
    <div key={props.name} className="card animated flipInY tada" onClick={() => props.handleClick(props.name)}>
      <div className="card-image">
        <img 
          src={props.src}
          alt={props.name}
        />
        <span className="card-title background-dark-blur">{props.title}</span>
      </div>
    </div>
);

export default Card;