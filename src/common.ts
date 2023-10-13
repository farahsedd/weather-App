import sun from "./assets/sun.png";
import rain from "./assets/Rain_Cloud.png";
import cloud from "./assets/Sun_Cloud.png";
import snow from "./assets/Snow_Cloud.png";
import thunder from "./assets/Thunder_Cloud.png";

export const getWeatherSymbol = (weatherCode: number) => {
    if (weatherCode == 8000) {
      return thunder;
    } else if (weatherCode < 8000 && weatherCode >= 5000) {
      return snow;
    } else if (weatherCode < 5000 && weatherCode >= 4000) {
      return rain;
    } else if (weatherCode < 4000 && weatherCode >= 1100) {
      return cloud;
    } else {
      return sun;
    }
  };


export const getWindDirectionSymbol = (degrees: number) => {
    if (degrees >= 337.5 || degrees < 22.5) {
      return "N";
    } else if (degrees >= 22.5 && degrees < 67.5) {
      return "NE";
    } else if (degrees >= 67.5 && degrees < 112.5) {
      return "E";
    } else if (degrees >= 112.5 && degrees < 157.5) {
      return "SE";
    } else if (degrees >= 157.5 && degrees < 202.5) {
      return "S";
    } else if (degrees >= 202.5 && degrees < 247.5) {
      return "SW";
    } else if (degrees >= 247.5 && degrees < 292.5) {
      return "W";
    } else {
      return "NW";
    }
  };

export function getWeekdayName(weekdayIndex: number): string {
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  if (weekdayIndex >= 0 && weekdayIndex < weekdays.length) {
    return weekdays[weekdayIndex];
  } else {
    return "Invalid weekday index";
  }
}

  export type WeatherProps = {
    data?: {
      timelines: {
        intervals: {
          startTime: string;
          values: {
            humidity: number;
            precipitationProbability: number;
            sunriseTime: string;
            sunsetTime: string;
            temperature: number;
            temperatureApparent: number;
            windDirection: number;
            windSpeed: number;
            weatherCode: number;
          };
        }[];
      }[];
    } 
  }| null 