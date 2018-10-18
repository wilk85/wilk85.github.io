import React, { Component } from 'react';
import './App.css';
import Data from './components/Data'; 
import Image from './components/Image'; 
import Show from './components/Show';


const API_Key = 'd40d3e8c0a557b088a740dbc27452f36';


class App extends Component {
  state = {
    longitude: undefined,
    latitude: undefined,
    time: undefined,
    city_id: undefined,
    humidity: undefined,
    pressure: undefined,
    temperature: undefined,
    country: undefined,
    city: undefined,
    sunrise: undefined,
    sunset: undefined,
    visibility: undefined,
    description: undefined,
    wind: undefined,
    error: undefined,

  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;  
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?lang=pl&q=${city},${country}&appid=${
    API_Key}&units=metric`);
    const dat = await api_call.json();
    // console.log(dat.name, dat.main);
    if(city && country){
      console.log(dat);
      this.setState({
      
      city_id: dat.id,
      humidity: dat.main.humidity,
      pressure: dat.main.pressure,
      temperature: dat.main.temp,
      country: dat.sys.country,
      city: dat.name,
      sunrise: (new Date(dat.sys.sunrise*1000).toLocaleTimeString().slice(0,5)),
      sunset: (new Date(dat.sys.sunset*1000).toLocaleTimeString().slice(0,5)),
      visibility: dat.visibility/1000,
      description: dat.weather[0].description,
      wind: (dat.wind.speed*3.6).toFixed(1),
      error: ''
    });

    } else {
     this.setState({
      
      error: 'Uzupełnij puste pola!'
      });
    }
  }

  render() {

    return (
      <div>

        <div className="wrapper">
          <div className="main">
            <div className="container container-width">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Image />
                </div>
                <div className="col-xs-7 form-container">
                  <Data getWeather={this.getWeather} />
                  <Show  
                    
                    cityId={this.state.city_id}
                    humidity={this.state.humidity}
                    pressure={this.state.pressure}
                    temperature={this.state.temperature}
                    country={this.state.country}
                    city={this.state.city}
                    sunrise={this.state.sunrise}
                    sunset={this.state.sunset}
                    visibility={this.state.visibility}
                    description={this.state.description}
                    wind={this.state.wind}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
