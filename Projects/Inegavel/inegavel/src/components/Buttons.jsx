import { useState } from "react";
let size = 1;

const DeclineButton = () => {
    
    const [position, setPosition] = useState({top: 0, left:0, tam:1});
    
    const RandomPosition = () => {
      size++;
      setPosition({top:Math.random() * (Math.random() > 0.5 ? -400 : 400), 
                      left:Math.random() * (Math.random() > 0.5 ? -400 : 400), 
                      tam:0.1 * size + 1});
    }

  return (
    <div style={{display:"block"}} className="buttons-container">
      <button className="btn"
      style={{
        width:`${120 * position.tam}px`,
        height:`${70 * position.tam}px`,
        fontSize:`${16 * position.tam}px`}}>Sim</button>
      
      <button className="btn" 
      onMouseEnter={RandomPosition} 
      style={{
        position:"relative", 
        top: `${position.top}px`, 
        left: `${position.left}px`,
        width: `${120}px`,
        height: `${70}px`}}
        id="Decline">Não</button>
    </div>
  )
}

export default DeclineButton;