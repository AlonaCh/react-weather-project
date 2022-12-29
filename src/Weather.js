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
      <h1>Dakar</h1>
      <ul>
        <li>Wensday 28 Dec, 14:18</li>
        <li>Clear sky</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Sunny"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">5</span>
              <span className="units">℃</span>
            </div>
          </div>
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
