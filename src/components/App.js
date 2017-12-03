
//import './App.css';

import React from 'react';
import {
	BrowserRouter,
	Route
} from 'react-router-dom';

//App components
import Header from './Header';
import Home from './Home';
import About from './About';
import APARTMENTS from './APARTMENTS';
import SEARCH from './SEARCH';
import Invite from './Invite';
import axios from 'axios';

const App = () => (
	<BrowserRouter>
  	<div className="container">
  		<Header />
  			<Route exact path="/" component={Home} />
  			<Route path="/About" render={ () => <About title='About'/>} />
  			<Route path="/APARTMENTS" render={ () => <APARTMENTS title='Available Apts'/>} />
  			<Route path="/SEARCH" render={ () => <SEARCH title='Neighborhoods'/>} />
  			<Route path="/Invite" render={ () => <Invite title='Open House'/>} />

  </div>
  </BrowserRouter>
);


export default App;