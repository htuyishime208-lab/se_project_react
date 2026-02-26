import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

import { weatherConditionImages } from "../../utils/constants";
import "./WeatherCard.css";
function WeatherCard({weatherData}) {
const contextValue= useContext(CurrentTemperatureUnitContext);
const selectedTemp =
  contextValue.currentTempUnit === "F"
    ? weatherData.temp.F
    : weatherData.temp.C;
 
    return (
    <section className="weather__card"> 
    <img src={weatherConditionImages["day"]?.[weatherData.weatherCondition]?.image} className="weather-card__image"/>
    <p className="weather__card-temp">{selectedTemp} &deg; {contextValue.currentTempUnit}</p>

    </section>
  );
}


 
export default WeatherCard;
