import { useForm } from "../../Hooks/useForm";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
function AddItemModal({isOpen, handleAddItemSubmit}){
    const { values, handleChange}= useForm({name: "", weather:"hot", imageUrl:""});
    
    const handleSubmit = (event) => {
    event.preventDefault();
    handleAddItemSubmit(values );
  };


    return(
        <ModalWithForm  
      isOpen={isOpen}
      title={"New Garment"}
      buttontext={"Add Garment"}
      handleSubmit={handleSubmit}
       >
        <fieldset className='modal__fieldset'>

        <label htmlFor="add-garment-name" className="modal__label">
      Name
    <input id='add-garment-name'  
    placeholder="Name" type="text" 
    className="modal__input" 
    name="name" value={values.name} 
    onChange={handleChange} /></label>

      
    <label htmlFor="add-garment-link" className="modal__label">
      Link
    <input id='add-garment-link'  
    placeholder="link" type="text" 
    className="modal__input" 
    name="imageUrl" value={values.imageUrl} 
    onChange={handleChange} /></label>


</fieldset >
<fieldset className='modal__fieldset'>
  <legend>Select the weather type:</legend>

  <div>
    <input className='modal__radio-btn' type="radio" id="hot" name="weather" value="hot" checked={values.weather === "hot"} onChange={handleChange} />
    <label htmlFor="hot">Hot</label>
  </div>

  <div>
    <input type="radio" id="warm" name="weather" value="warm" checked={values.weather === "warm"} onChange={handleChange}/>
    <label className='modal__label' htmlFor="warm">Warm</label>
  </div>

  <div>
    <input type="radio" id="cold" name="weather" value="cold" checked={values.weather === "cold"} onChange={handleChange}/>
    <label htmlFor="cold">Cold</label>
  </div>
</fieldset>


       </ModalWithForm>
    )
}
export default AddItemModal;