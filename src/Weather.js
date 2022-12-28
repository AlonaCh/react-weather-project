import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Dakar</h1>
      <ul>
        <li>Wensday 28 Dec, 14:18</li>
        <li>Clear sky</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Sunny"
          />{" "}
          5℃
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like: 25 ℃</li>
            <li>Humidity: 67%</li>
            <li>Wind: 35 m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
