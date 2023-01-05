import React from "react";

export default function weatherIcon(props) {
  return (
    <img
      src="http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png"
      alt={props.alt}
    />
  );
}
