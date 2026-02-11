import { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch() {
const contextValue= useContext(CurrentTemperatureUnitContext);
 
    return (

        <label htmlFor="Toggle-Switch" className="Toggle-Switch">
            <input id="Toggle-Switch" type="checkbox" className="Toggle-Switch__checkbox" 
         
            onChange={contextValue.handleTempUnitChange}
            
            />
            <span className="Toggle-Switch__circle"></span>
            <span className="Toggle-Switch__value  Toggle-Switch__value_left">F</span>
             <span className="Toggle-Switch__value Toggle-Switch__value_right">C</span>
        </label>
    );

}
export default ToggleSwitch;