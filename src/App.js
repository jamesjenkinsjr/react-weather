import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
    <div>
      <h1>React Weather</h1>
      <p>Are you blind?  Do you somehow not have the ability to look outside in your current location, or are you perhaps oddly curious about current weather for some location you are not in? GOOD NEWS -- This app gonna fix dat.</p>
      <form>
        <label>
          Latitude:
          <input type="number" placeholder="89.89"/>
        </label>
        <label>
          Longitude:  
          <input type="number" placeholder="-12.12"/>      
        </label>
        <button>Make it rain!</button>
      </form>
    </div>
    );
  }
}

export default App;
