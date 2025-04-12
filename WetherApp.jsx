import SearchBox from "./searchBox.jsx";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WetherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    City: "Gulbarga",
    temp: 25.25,
    tempMin: 22.2,
    tempMax: 28.5,
    humidity: 47,
    feelsLike: 24.34,
    weather: "Cloudy",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div>
      <h2>Weather App by Delta!</h2>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}
