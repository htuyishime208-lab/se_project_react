import "./Profile.css"
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";


function Logo({clothingItems, handleAddGarmentModal,handleOpenItemModal={handleOpenItemModal}}){


    return(
        <main className="logo">
            <SideBar/>
            <ClothesSection clothingItems={clothingItems}  handleAddGarmentModal={handleAddGarmentModal} handleOpenItemModal={handleOpenItemModal} />

        </main>
    );
}

export default Logo;