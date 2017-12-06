import React, { Component } from 'react';
import './map.css';

class Map extends Component {

    constructor(props) {
        super(props);
        console.log(props.weatherData)
    }

    render() {
        return (
            <div className="place-holder">
                <h5>
                    <img src={this.props.weatherData.icon_url} alt="icon url" className="icon"/>
                </h5>
                <h5>
                    Feels Like Fº {this.props.weatherData.feelslike_f}
                </h5>
                <h5>
                    Temperature {this.props.weatherData.temp_f}
                </h5>
                <h5>
                    Visibility {this.props.weatherData.visibility}
                </h5>
                <h5>
                    Humidity {this.props.weatherData.relative_humidity}
                </h5>
                <h5>
                    Forecast {this.props.weatherData.weather}
                </h5>
                <h5>
                    Wind Direction {this.props.weatherData.wind_dir}
                </h5>
                <h5>
                    Wind Speed {this.props.weatherData.win_mph}
                </h5>
                <h5>
                    Wind Gust {this.props.weatherData.win_gust_mph}
                </h5>
                <h5>
                    State {this.props.stateName};
                </h5>
            </div>
        )
    }
}

export default Map;