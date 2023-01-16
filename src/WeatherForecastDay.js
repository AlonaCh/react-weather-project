import React from "react";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }
  function day() {
    let data = new Date(props.data.time * 1000);
    let day = data.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function icon() {
    let icon = props.data.condition.icon;
    return `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${icon}.png`;
  }

  return (
    <div>
      <div className="ForecastDay">{day()}</div>
      <img src={icon()} alt={props.data.condition.description} />
      <div className="ForecastTemperatures">
        <span className="ForecastTemperatures-max">{maxTemperature()}</span>
        <span className="ForecastTemperatures-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
