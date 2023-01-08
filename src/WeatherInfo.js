import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />{" "}
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <div>
              <WeatherIcon
                code={props.data.icon}
              />
            </div>
            
            <div className="float-left">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="units">℃</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like: {Math.round(props.data.feelsLike)} ℃</li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind}m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
