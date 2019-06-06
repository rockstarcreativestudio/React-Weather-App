import React, { Component } from 'react';
import Form from './components/Form';
import Titles from './components/Titles';
import Weather from './components/Weather';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends Component {
  state = {
    hidden: true,
    isLoading: false,
    temp: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    descrip: undefined,
    icon: undefined,
    error: undefined
  }

getWeather = async (e) => {
  e.preventDefault();
  this.setState({
    isLoading: true
  })
  const zip = e.target.elements.zip.value;
  const country = e.target.elements.country.value;
  const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${zip},${country}&units=imperial&appid=${API_KEY}`);

  const data = await api_call.json();
  if ( zip && country ) {
  console.log(data);
  this.setState({
    hidden: false,
    isLoading: false,
    temp: data.main.temp,
    city: data.name,
    country: data.sys.country,
    humidity: data.main.humidity,
    descrip: data.weather[0].description,
    icon: data.weather[0].icon,
    error: ""
  });
} else {
  this.setState({
    error: "Please enter a valid city or country."
  })
}
}

  render() {
    const loading = this.state.isLoading;
    const hidden = this.state.hidden;
    const error = this.state.error;
    let spinner;
    if (error) {
      spinner = <div className="row">
      <div className="col-sm"></div>
      <div className="col-4 text-center">
      <h3 className="text-danger">Please enter a valid zipcode or country.</h3>
      </div>
      <div className="col-sm"></div>
      </div>
    } else if (hidden) {
      spinner = <div></div>
    } else if (loading) {
      spinner = <div className="row">
      <div className="col-sm"></div>
      <div className="col-4 text-center">
      <i className="fas fa-3x fa-spinner fa-pulse text-info"></i>
      </div>
      <div className="col-sm"></div>
      </div>;
    } else {
      spinner = <Weather 
      temp={this.state.temp}
      city={this.state.city}
      country={this.state.country}
      humidity={this.state.humidity}
      descrip={this.state.descrip}
      icon={this.state.icon}
      error={this.state.error}
      />
    }
    return (
      <div className="container-fluid">
        <Titles />
        <Form getWeather={this.getWeather}/>
        {spinner}
      </div>
    );
  }
}

export default App;
