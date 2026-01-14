import { useState } from 'react'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import ItemModal from '../ItemModal/ItemModal';
import ModalWithForm from '../ModalWithForm/ModalWithForm'
import { defaultClothingItems } from '../../utils/defaultClothingItems';
import './App.css'

function App() {
const [clothingItems,setClothingItems]= useState(defaultClothingItems);
const [activeModal, setActiveModal]=useState("");
const [selectedCard, setSelectedCard]= useState({});
const closeModal = () => setActiveModal(null);

function handleOpenItemModal(card) {
  setActiveModal("item-modal");
 setSelectedCard(card);
}

function handleAddGarmentModal() {
  setActiveModal("add-garment-modal");

}




  return (
    <div className='app'>
      <Header handleAddGarmentModal={handleAddGarmentModal}/>
      <Main clothingsItems={clothingItems} handleOpenItemModal={handleOpenItemModal} />
      <Footer/>
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
  )
}

export default App;
