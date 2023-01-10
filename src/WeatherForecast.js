import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "b7a3558dd4231bb7517fc8c9d13c79d4";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}$units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay"> Mon </div>
          <WeatherIcon code="01n" size={36} />
          <div className="ForecastTemperatures">
            <span className="ForecastTemperatures-max">20°</span>
            <span className="ForecastTemperatures-min">11°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
