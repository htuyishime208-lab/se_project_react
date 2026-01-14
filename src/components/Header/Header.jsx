import logo from "../Images/Logo.svg";
import avatar from "../Images/Avatar.svg";
import "./Header.css";

function Header({handleAddGarmentModal}) {
const now = new Date();
const dateStr= now.toLocaleDateString("default",{
  month:"long",
  day:"numeric",
});
  return (
        <header className="header"> 
        <img src={logo} alt="WTWR logo" className="heager__logo"/>
        <p className="header__place" >
          <time className="header__datime" dateTime= {now}> {dateStr}</time> , New York
          </p>
    <button onClick={handleAddGarmentModal} className="header__add-clothes-btn">+ Add Clothes</button>
    <p className="header__username">Terrence Tegegne</p>
     <img src={avatar} alt="Avatar logo" className="heager__avatar"/>
    </header>
  
  );

}

export default Header;
