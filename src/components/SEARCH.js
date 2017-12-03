import React from 'react';
import Relocate from './Relocate';
import '../components/index.css';
import axios from 'axios';

const SEARCH = () => (
  <div className="main-content SEARCH">
    <div className="course-header group">
      <h2>Search Neighborhoods</h2> 
	  <Relocate />
      <ul className="course-nav">
        <li><a href='../components/SEARCH/html'>Upper East Side</a></li>
        <li><a href='../components/SEARCH/css'>Upper West SIde</a></li>
        <li><a href='../components/SEARCH/javascript'>Morningside Heights</a></li>
      </ul>
	 
    </div>
    
    {/* Write routes here... */}
  </div>
);

export default SEARCH;