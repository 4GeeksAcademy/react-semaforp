import React from "react";
import React, { useState } from "react";

const Semaforo = () => {
    const [color, setColor] = useState("rojo")
    return (
        <div>
            <h1>Semaforo</h1>
            <div>El color actual es: {color} </div>
        </div>
    ) 
}

return (
    <div>
      <h1>Semáforo</h1>
      <div className={`luz rojo ${color === "rojo" ? "encendida" : ""}`} />
      <div className={`luz amarillo ${color === "amarillo" ? "encendida" : ""}`} />
      <div className={`luz verde ${color === "verde" ? "encendida" : ""}`} />
    </div>
  );
  



export default Semaforo;