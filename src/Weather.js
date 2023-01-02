import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.speed,
      city: response.data.name,
      date: "Wednesday, 07:00",
      description:response.data.weather[0].description,
      iconUrl:" ",
      humidity: response.data.main.humidity,
      feelsLike: response.data.main.feels_like,
    });
    
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}, 14:18</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="units">℃</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Feels like: {Math.round(weatherData.feelsLike)} ℃</li>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {weatherData.wind}m/s</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b7a3558dd4231bb7517fc8c9d13c79d4";
    
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
