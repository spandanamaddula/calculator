import React from "react";
// import ReusableButton from "./Reusablebutton";
 const ComponentA =()=>{
 const handleButtonClick =()=>{
    alert('ComponentA is clicked');

 }
 
 return(
    <div>
        <h1>ComponentA</h1>
        
        <button label="click here( ComponentA)" name="custom-button" onClick={handleButtonClick}
         style={{ backgroundcolor:'blue'}}>Button</button>
          
    </div>
 )
 };
 export default ComponentA;