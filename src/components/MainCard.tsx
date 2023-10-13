import React, { useContext, useEffect, useState } from "react";
import sun from "../assets/sun.png";
import rain from "../assets/Rain_Cloud.png";
import cloud from "../assets/Sun_Cloud.png";
import snow from "../assets/Snow_Cloud.png";
import thunder from "../assets/Thunder_Cloud.png";
import { Card } from "antd";
import axios from "axios";
import {
  WeatherProps,
  getWeatherSymbol,
  getWeekdayName,
  getWindDirectionSymbol,
} from "../common";
import { WeatherContext } from "../App";

const MainCard = ({
  weather,
  index,
}: {
  weather: WeatherProps;
  index: number;
}) => {

  const  weatherData  = useContext(WeatherContext);
  const data = weather?.data?.timelines[0].intervals[index];
  let date;
  let sunrise;
  let sunset;
  if (data) {
    date = new Date(data.startTime);
      sunrise = new Date(
        data.values.sunriseTime
      ).getTime();
      sunset = new Date(
        data.values.sunsetTime
      ).getUTCHours();
  }

  return (
    <Card
      style={{
        fontFamily: "Montserrat",
        width: 380,
        height: 350,
        background: "#D9D9D9",
        borderRadius: "30px",
      }}
    >
      {weather && (
        <>
          <h1 style={{ fontSize: "32px", margin: "0" }}>{date?.getDay()!== undefined && getWeekdayName(date?.getDay())}</h1>
          <p style={{ fontSize: "20px", margin: "0" }}>{date?.getDate()}{"/"}{date?.getMonth()}{"/"}{date?.getFullYear()}</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "150px",
            }}
          >
            <p style={{ fontSize: "64px" }}>
              {Math.round(weather.data!.timelines[0].intervals[index].values.temperature)}
            </p>
            <img
              src={getWeatherSymbol(
                weather.data!.timelines[0].intervals[index].values.weatherCode
              )}
              alt="weather"
              style={{ width: "120px", marginLeft: "50px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "16px",
              fontWeight: "500",
              marginTop:'20px'
            }}
          >
            <div style={{ textAlign: "left" }}>
              <p style={{ margin: "0" }}>
                Feels like:{" "}
                {
                  Math.round(weather.data!.timelines[0].intervals[index].values
                    .temperatureApparent)
                }
                °
              </p>
              <p style={{ margin: "0" }}>
                Wind:
                {getWindDirectionSymbol(
                  weather.data!.timelines[0].intervals[index].values
                    .windDirection
                )}{" "}
                {weather.data!.timelines[0].intervals[index].values.windSpeed}{"Km/h"}
              </p>
              
            </div>
            <div style={{ textAlign: "left" }}>
              <p style={{ margin: "0" }}>
                Humidity:{" "}
                {weather.data!.timelines[0].intervals[index].values.humidity}%
              </p>
              <p style={{ margin: "0" }}>
                Precipitation:{" "}
                {
                  weather.data!.timelines[0].intervals[index].values
                    .precipitationProbability
                }
                %
              </p>
              {/* <p style={{ margin: "0" }}>Sunrise: {sunrise}</p>
              <p style={{ margin: "0" }}>Sunset: {sunset}</p> */}
            </div>
          </div>
        </>
      )}
    </Card>
  );
};

export default MainCard;
