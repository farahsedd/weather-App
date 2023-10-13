import React, { createContext, useContext, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainCard from "./components/MainCard";
import SlimCard from "./components/SlimCard";
import wave1 from "./assets/wave1.png";
import wave2 from "./assets/wave2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import axios from "axios";

export const WeatherContext = createContext(null);
export const UnitContext = createContext(null);

function App() {
  const [isMiddle, setisMiddle] = useState(2);
  const [location, setLocation] = useState("36.806389,10.181667");
  const [unit, setUnit] = useState('metric');
   const api_key = "4y2lvWef10GYqyPHq50azwONh5QPxJd8";
   const getTimelineURL = "https://api.tomorrow.io/v4/timelines";
   const [weatherData, setWeatherData] = useState(null);
   useEffect(() => {
    const url = `${getTimelineURL}?location=${location}&fields=temperature,temperatureApparent,weatherCode,humidity,windSpeed,windDirection,precipitationProbability,sunriseTime,sunsetTime&timesteps=1d&units=${unit}&apikey=${api_key}&startTime=nowMinus1d`;
    axios.get(url)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  return (
    <WeatherContext.Provider value={weatherData}>
    <div className="App">
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "70%" }}>
          <Swiper
            modules={[Navigation]}
            slidesPerView={3}
            loopedSlides={2}
            navigation
            loop
          >
            {[0, 1, 2, 3, 4].map((index) => (
              <SwiperSlide>
                {({ isActive }) => {
                  if (isActive) {
                    if (index < 4) {
                      setisMiddle(index + 1);
                    } else {
                      setisMiddle(0);
                    }
                    console.log(isMiddle);
                  }
                  return (
                    <div style={{ display: "inline-block" }} key={index}>
                      {isMiddle == index ? <MainCard weather={weatherData} index={index}></MainCard> : <SlimCard weather={weatherData} index={index}/>}
                    </div>
                  );
                }}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <img
        src={wave1}
        alt="footer"
        style={{
          position: "fixed",
          left: "0",
          bottom: "-40px",
          width: "100%",
        }}
      ></img>
      <img
        src={wave2}
        alt="footer"
        style={{
          position: "fixed",
          left: "0",
          bottom: "-40px",
          width: "100%",
        }}
      ></img>
    </div>
    </WeatherContext.Provider>
  );
}

export default App;
