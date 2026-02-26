import "./Sidebar.css"
import avatar from "../Images/Avatar.svg";



 function SideBar(){


    return(
        <div className="sidebar">
    <aside className="sidebar__row">
    <img src={avatar} alt="Avatar logo" className="sidebar__avatar"/>
    <p className="sidebar__username">Terrence Tegegne</p>
</aside>
        </div>
    );
}

export default SideBar;