import React, {Component} from 'react';
import {Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import axios from 'axios';
import SearchForm from './SearchForm';
import GifList from './GifList';

class Relocate extends Component {

constructor() {
    super();

    this.state = {
        gifs: []
    }; 
}
    //search() {
        //let { Neighborhood, Apartments} = this.state;
        //const url= `https://www.zillow.com/api/?i=${Neighborhood}&q=${Apartments}`;
        
        componentDidMount() {
            axios.get('http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=Dc6zaTOxFJmzC&limit=5')
        //fetch('http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=Dc6zaTOxFJmzC&limit=5')
        //.then(response => response.json())
        .then(response => {
            this.setState({ gifs: response.data.data 
            });
        })
        .catch(error => {
            console.log('Error fetching and parsin data', error);
        });
    }
        //    method: 'GET'
       // })
        //.then(response => response.json())
        //.then(json => console.log('Search', json));
    


	render() {
        console.log(this.state.gifs);
		return (
          <div>
              <div className="main-header">
                <div className="inner">
                <h1 className="main-title"></h1>
            <SearchForm />
            </div>
            </div>
            <div className="main-content">
            <GifList data={this.state.gifs} />
            </div>
            </div>
		);
	}
}

export default Relocate;