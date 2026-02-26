import { Link } from "react-router-dom";
import logo from "../Images/Logo.svg";
import avatar from "../Images/Avatar.svg";
import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header({handleAddGarmentModal, weatherData}) {
const now = new Date();
const dateStr= now.toLocaleDateString("default",{
  month:"long",
  day:"numeric",
});
  return (
        <header className="header"> 
        <div className="header__side">
        <img src={logo} alt="WTWR logo" className="header__logo"/>
        <p className="header__place" >
          <time className="header__datime" dateTime= {now}> {dateStr}</time> , {weatherData.city}
          </p>
          </div>
          <div className="header__side">
          <ToggleSwitch/>
         
    <button onClick={handleAddGarmentModal} className="header__add-clothes-btn">+ Add Clothes</button>
    <Link className="header__link" to="/profile">
    <p className="header__username">Terrence Tegegne</p>
     <img src={avatar} alt="Avatar logo" className="header__avatar"/>
     </Link> </div>
    </header>
  
  );

}

export default Header;
