import { useEffect, useState } from 'react'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import ItemModal from '../ItemModal/ItemModal';
import ModalWithForm from '../ModalWithForm/ModalWithForm'
import { defaultClothingItems } from '../../utils/defaultClothingItems';
import './App.css'
import {getWeatherData} from '../../utils/weatherApi';
import CurrentTemperatureUnitContext from '../../contexts/CurrentTemperatureUnitContext';

function App() {
const [clothingItems,setClothingItems]= useState(defaultClothingItems);
const [activeModal, setActiveModal]=useState("");
const [selectedCard, setSelectedCard]= useState({});
const [weatherData, setWeatherData]= useState({name:"", temp:"0"});
const closeModal = () => setActiveModal(null);
const [currentTempUnit, setCurrentTempUnit]= useState("F");



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


useEffect(() =>{
  getWeatherData()
  .then((data) =>{
   setWeatherData(data)
})
  .catch(console.error);
  }, []);

useEffect(() =>{
  setClothingItems(defaultClothingItems);
}, []);
  return (
    <CurrentTemperatureUnitContext.Provider value={{currentTempUnit, handleTempUnitChange}}>
    <div className='app'>
      <Header 
      weatherData={weatherData}
      handleAddGarmentModal={handleAddGarmentModal}/>
      <Main 
      weatherData={weatherData}
      clothingsItems={clothingItems} handleOpenItemModal={handleOpenItemModal} />
      <Footer  />
      <ItemModal card={selectedCard} isOpen={activeModal ==="item-modal"}  onClose={closeModal} >

      </ItemModal>

      <ModalWithForm  
      isOpen={activeModal ==="add-garment-modal"}
      title={"New Garment"}
      buttontext={"Add Garment"}
       >
        <fieldset className='modal__fieldset'>
        <label htmlFor="add-garment-name" className="modal__label">
      Name
    <input id='add-garment-name'  placeholder="Name" type="text" className="modal__input" />
     <label htmlFor="" className="modal__label">
      Image
    <input  placeholder="Image URL" type="url" className="modal__input" />
</label></label>
</fieldset >
<fieldset className='modal__fieldset'>
  <legend>Select the weather type:</legend>

  <div>
    <input className='modal__radio-btn' type="radio" id="hot" name="weather" value="hot" />
    <label htmlFor="hot">Hot</label>
  </div>

  <div>
    <input type="radio" id="warm" name="weather" value="warm" />
    <label className='modal__label' htmlFor="warm">Warm</label>
  </div>

  <div>
    <input type="radio" id="cold" name="weather" value="cold" />
    <label htmlFor="cold">Cold</label>
  </div>
</fieldset>


       </ModalWithForm>
      
       </div>
       </CurrentTemperatureUnitContext.Provider>
  )
}

export default App;
