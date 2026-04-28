import "./ClothesSection.css";
import ItemCard from "../ItemCard/ItemCard";
import ItemModal from "../ItemModal/ItemModal";
function ClothesSection({clothingItems, handleOpenItemModal, handleAddGarmentModal,handleLogin, onCardClick}){
 return(
    <section className="clothes-section">
        <div className="clothes-section__row"> Your Item 
            <button onClick={handleAddGarmentModal} className="clothes-section__btn">+ Add New</button>
              <button onClick={handleLogin} className="clothes-section__btn">Login</button>


        </div>
        
        <ul className="clothes-section__card-list">
    {clothingItems.map((item)=>{
      return<ItemCard key={item._id} data={item} onCardClick={handleOpenItemModal} />
      
    })}
    </ul>
    </section>
 );
}

export default ClothesSection;