import React, { Component } from 'react';
import Header from './components/header/header';
import Map from './components/centermap/map';
import './App.css';

const wapi = "http://api.wunderground.com/api/90fc91e77d4cd5f1/conditions/q/"
const ipApi2 = "http://ip-api.com/json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      lat: 0,
      lon: 0,
      weather: {},
      state: ''
    }
  }

  async componentDidMount() {
    // if (navigator.geolocation) {
      //   navigator.geolocation.getCurrentPosition((location) => {
        //     this.setState({
          //       lat: location.coords.latitude,
          //       lon: location.coords.longitude
          //     })
          //   })
          // } else {
            const raw = await fetch(ipApi2);
            const data = await raw.json();
            const weatherData = await fetch(`${wapi}${data.lat},${data.lon}.json`);
            const result = await weatherData.json();

            this.setState({
              weather: result.current_observation,
              state: result.current_observation.display_location.state_name
            })
            console.log('component did mount', this.state.state);
    // }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Map weatherData={this.state.weather} stateName={this.state.state}/>
      </div>
    );
  }
}

export default App;


// 90fc91e77d4cd5f1
// api key
// http://api.wunderground.com/api/90fc91e77d4cd5f1/

// color pallete
// F9F9F7
// 76B5E1
// BBCBD6
// 7EA0C7
// 3E5DA9