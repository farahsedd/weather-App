import { Card } from "antd";
import React, { useEffect, useState } from "react";
import sun from "../assets/sun.png";
import rain from "../assets/Rain_Cloud.png";
import cloud from "../assets/Sun_Cloud.png";
import snow from "../assets/Snow_Cloud.png";
import thunder from "../assets/Thunder_Cloud.png";
import axios from "axios";
import { WeatherProps, getWeatherSymbol, getWeekdayName } from "../common";

const SlimCard = ({
  weather,
  index,
}: {
  weather: WeatherProps;
  index: number;
}) => {
  const data = weather?.data?.timelines[0].intervals[index];
  let date;

  if (data) {
    date = new Date(data.startTime);
  }
  return (
    <div className="item">
      <Card
        style={{
          fontFamily: "Montserrat",
          width: 150,
          height: 350,
          background: "#D9D9D9",
          borderRadius: "30px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {weather && (
          <>
            <h1 style={{ fontSize: "32px", margin: "0" }}>{date?.getDay()!== undefined && getWeekdayName(date?.getDay())}</h1>
            <div
              style={{
                background: "black",
                height: "1px",
                width: "50%",
                margin: "10px auto",
              }}
            ></div>
            <p style={{ fontSize: "20px", margin: "0" }}>{date?.getDate()}{"/"}{date?.getMonth()}{"/"}{date?.getFullYear()}</p>
            <img
              src={getWeatherSymbol(
                weather.data!.timelines[0].intervals[index].values.weatherCode
              )}
              alt="weather"
              style={{ width: "80px" }}
            />
            <p style={{ fontSize: "64px", margin: "0" }}>
              {Math.round(weather.data!.timelines[0].intervals[index].values.temperature)}°
            </p>
          </>
        )}
      </Card>
    </div>
  );
};

export default SlimCard;
