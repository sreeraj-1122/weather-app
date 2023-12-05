import React, { useState } from "react";
import "../styles/weather.css";
import searchIcon from "../assets/search.png";
import cloud from "../assets/cloud.png";
import hum from "../assets/humidity.png";
import wind from "../assets/wind.png";
import snow from "../assets/snow.png";
import dizzle from "../assets/drizzle.png";
import rain from "../assets/rain.png";
import clear from "../assets/clear.png";

function Weather() {
  let api_key = "1b0a3c742be81f9e7fe61db579a3eec5";
  const [wicon, setWicon] = useState(cloud);

  const search = async () => {
    const element = document.getElementsByClassName("search");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();

    let humidity = document.getElementsByClassName("humidity-speed");
    let wind = document.getElementsByClassName("wind-speed");
    let temp = document.getElementsByClassName("weather-value");
    let location = document.getElementsByClassName("name");
    humidity[0].innerHTML = data.main.humidity + " %";
    wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h";
    temp[0].innerHTML = Math.floor(data.main.temp) + "°c";
    location[0].innerHTML = data.name;
    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWicon(clear);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWicon(cloud);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWicon(cloud);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWicon(dizzle);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWicon(dizzle);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWicon(rain);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWicon(rain);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setWicon(snow);
    } else {
      setWicon(clear);
    }
  };
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" placeholder="Search" className="search" />
        <div className="search-icon" onClick={() => search()}>
          <img src={searchIcon} alt="" />
        </div>
      </div>
      <div className="weather-body">
        <img src={wicon} alt="" />
        <div className="weather-value">15°c</div>
        <div className="name">London</div>
        <div className="data-section">
          <div className="elements">
            <img src={hum} alt="" />
            <div className="data">
              <div className="humidity-speed">87%</div>
              <div className="humidity">Humidity</div>
            </div>
          </div>
          <div className="elements">
            <img src={wind} alt="" />
            <div className="data">
              <div className="wind-speed">5.14km/h</div>
              <div className="wind">Wind speed</div>
            </div>
          </div>
        </div>
        /
      </div>
    </div>
  );
}

export default Weather;
