import cloud from "../Images/cloud.svg";
import "./WeatherCard.css";
function WeatherCard() {

  return (
    <section className="weather__card"> 
    <img src={cloud} alt="cloud weather" className="weather-card__image"/>
    <p className="weather__card-temp"></p>
    
    </section>
  );
}

export default WeatherCard;
