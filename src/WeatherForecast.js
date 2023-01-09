import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
