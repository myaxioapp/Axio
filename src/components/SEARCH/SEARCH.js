import React from 'react';

const SEARCH = (props) => (
  <li className="SEARCH media group">
    <img className="SEARCH-img" src={props.img} alt="SEARCH" />
    <div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  </li>
);

export default SEARCH;