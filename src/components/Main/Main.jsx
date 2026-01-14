import "./Main.css"
import WeatherCard from "../WeatherCard/Weathercard";
import ItemCard from "../ItemCard/ItemCard";


function Main({clothingsItems,handleOpenItemModal}) {

  return (
    <main className="main"> 
    <WeatherCard/>
    <p className="main__text">Today is 75° F / You may want to wear:</p>
    <ul className="main__card-list">
    {clothingsItems.map((item)=>{
      return<ItemCard key={item._id} data={item} onCardClick={handleOpenItemModal}/>
      
    })}
    </ul>
    </main>
  );
}

export default Main;
