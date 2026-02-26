import "./Profile.css"
import ClothesSection from "../ClothesSection/ClothesSection";
import SideBar from "../SideBar/SideBar";


function Profile({clothingItems, handleAddGarmentModal,handleOpenItemModal={handleOpenItemModal}}){


    return(
        <main className="profile">
            <SideBar/>
            <ClothesSection clothingItems={clothingItems}  handleAddGarmentModal={handleAddGarmentModal} handleOpenItemModal={handleOpenItemModal} />

        </main>
    );
}

export default Profile;