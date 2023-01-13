import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let data = new Date(props.data.dt * 1000);
    let day = data.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="ForecastDay">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
      <div className="ForecastTemperatures">
        <span className="ForecastTemperatures-max">{maxTemperature()}</span>
        <span className="ForecastTemperatures-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
