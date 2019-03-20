import React from 'react';

class Weather extends React.Component {
    
render() {
    return (
        <>
        <div className="row">
        <div className="col-sm"></div>
        <div className="col-4 text-center">
            
            <h3 className="text-info">Weather for {this.props.city}, {this.props.country}</h3>
            <img src={"http://openweathermap.org/img/w/" + this.props.icon +".png"} alt="weather icon"/>
            <div className="row">
            <div className="col text-right"><h4>Temp: {this.props.temp}</h4></div>
            <div className="col text-left"><h4>Humidity: {this.props.humidity}</h4></div>
            </div>
        </div>
        <div className="col-sm"></div>            
        </div>
        </>
    )
} 
}



export default Weather;