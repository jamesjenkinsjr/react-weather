import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      lat: 0.0,
      long: -0.0
    };
    this.handleLatChange = this.handleLatChange.bind(this);
    this.handleLongChange = this.handleLongChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleLatChange(e) {
    this.setState({
      lat: +e.target.value
    });
  }
  handleLongChange(e) {
    this.setState({
      long: +e.target.value
    })
  }
  
  handleSubmit(e) {
    e.preventDefault();
    alert('breh');
  }
  render() {
    return (
    <div>
      <h1>React Weather</h1>
      <p>Are you blind?  Do you somehow not have the ability to look outside in your current location, or are you perhaps oddly curious about current weather for some location you are not in? GOOD NEWS -- This app gonna fix dat.</p>
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          Latitude:
          <input type="number" min="-90" max="90" onChange={(e) => this.handleLatChange(e)} value={this.state.lat} required/>
        </label>
        <label>
          Longitude:  
          <input type="number" min="-180" max="180" onChange={(e) => this.handleLongChange(e)} value={this.state.long} required/>      
        </label>
        <button type="submit">MAKE IT RAIN!</button>
      </form>
    </div>
    );
  }
}

export default App;
