import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Dakar"/>

        <footer>
          Coded by Alona Chubenko and is
          <a
            href="https://github.com/AlonaCh/react-weather-project.git"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-soursed on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
