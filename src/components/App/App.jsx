import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import ItemModal from '../ItemModal/ItemModal';
import AddItemModal from '../AddItemModal/AddItemModal';
import Profile from '../Profile/Profile';
import { defaultClothingItems } from '../../utils/defaultClothingItems';
import './App.css'
import {getWeatherData} from '../../utils/weatherApi';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext';
import { addItem, getItems, deleteItem } from '../../../api';



function App() {
const [clothingItems,setClothingItems]= useState(defaultClothingItems);
const [activeModal, setActiveModal]=useState("");
const [selectedCard, setSelectedCard]= useState({});
const [weatherData, setWeatherData]= useState({name:"", temp:"0"});
const closeModal = () => setActiveModal(null);
const [currentTempUnit, setCurrentTempUnit]= useState("F");


const [items, setItems] = useState([
    { id: 1 },
    { id: 2},
  ]);



function handleOpenItemModal(card) {
  setActiveModal("item-modal");
 setSelectedCard(card);
}

function handleAddGarmentModal() {
  setActiveModal("add-garment-modal");

}

  function handleTempUnitChange(){
        if (currentTempUnit=="F"){
            setCurrentTempUnit("C");
        }
        else{
            setCurrentTempUnit("F")
        }
    }


function handleAddItemSubmit (inputValues){
  addItem(inputValues).then((data) =>{
      setClothingItems([data,...clothingItems]);
  })
  .catch(console.error);
  
}

 function handleDeleteItem(id) {
    deleteItem(id)
      .then(() => {
        // Remove deleted item from state
        setItems((prev) => prev.filter((item) => item.id !== id));
      })
      .catch(console.error);
  }


useEffect(() =>{
  getWeatherData()
  .then((data) =>{
   setWeatherData(data)
})
  .catch(console.error);
  }, []);

useEffect(() =>{
  
  getItems().then((items)=>{
     if (Array.isArray(items)) {
    const sortedItems = [...items].sort((a, b) => b.id - a.id);
     setClothingItems(sortedItems,items);

}}).catch(console.error);
}, []);
  return (
    <CurrentTemperatureUnitContext.Provider value={{currentTempUnit, handleTempUnitChange}}>
    <div className='app'>
      <Header 
      weatherData={weatherData}
      handleAddGarmentModal={handleAddGarmentModal}/>
      
      <Routes>

           <Route path="/header" element={<Header 
      weatherData={weatherData}
      handleAddGarmentModal={handleAddGarmentModal} />}>
        </Route>

       



        <Route path="/" element={<Main 
      weatherData={weatherData}
      clothingItems={clothingItems} handleOpenItemModal={handleOpenItemModal} />}>
        </Route>

         <Route path="/profile" element={<Profile clothingItems={clothingItems}  handleAddGarmentModal={handleAddGarmentModal} handleOpenItemModal={handleOpenItemModal}/>}>
        </Route>


      </Routes>

      
      <Footer  />

      <ItemModal card={selectedCard} isOpen={activeModal ==="item-modal"}  onClose={closeModal}  handleDeleteItem={handleDeleteItem} >

      </ItemModal>

      <AddItemModal isOpen={activeModal ==="add-garment-modal"} handleAddItemSubmit={handleAddItemSubmit}/>
      
       </div>
       </CurrentTemperatureUnitContext.Provider>
  )
}

export default App;
