import React from 'react';
import APARTMENTSList from '../data/APARTMENTS';

const APARTMENTS = () => {
  let APARTMENTS = APARTMENTSList.map((APARTMENTS) => {
    return (
      <li className="APARTMENTS" key={APARTMENTS.id} >
        <img className="APARTMENTS-img" src={APARTMENTS.img_src} alt="area" />
        <h3>{APARTMENTS.name}</h3>
        <p>{APARTMENTS.bio}</p>
      </li>
    );
  }); 
  
  return (
    <div className="main-content">
      <h2>The HOT APPARTMENT PICK of the Week</h2>
      <p> This is a great appartment in Mornignside Heights.</p>
      <ul className="group">
        {APARTMENTS}    
      </ul>
    </div>
  );
}

export default APARTMENTS;