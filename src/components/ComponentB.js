import React from "react";
// import ReusableButton from "./Reusablebutton";

const ComponentB=()=>{
    const handleButtonClick=()=>{
        alert("ComponentB is clicked");
    }
    return (
    <div>
        <h1> ComponentB</h1>
        <button label="click here(ComponentB)" color="green" name= "custom button"  onClick={handleButtonClick}
        style={{backgroundcolor:'yellow'}}>button</button>
    </div>
    )
};
export default ComponentB;
