import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
    render() {

      const omdbResponse = this.state.response;
      return(
      <div>
        <input
          placeholder='search'
          onchange={(event => this.handleChange(event)
            />
            <button onClick={(event) => this.handleChange(event)}
            />

            )})
    }
  }
}

handleChange(event) {
  this.setState({
      searchText: event.target.value
    });

    handleClick {

      const configuration = {
        params: {
          api: '83961a16'
          t: this.state.searchText
        }
      }

      axios
        .get(http://wwww.omdbapi.com/', configuration'
        .then(res =>(
        console.log(res)
        })
        .catch(err => console.log*error))
    }
  })
}

export default App;
