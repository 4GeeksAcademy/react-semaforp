import React from "react";
import ReactDOM from "react-dom/client";
import './styles/index.css';  // Para archivo en /src/styles/index.css


// Otros imports y código...

const Semaforo = () => {
  const [color, setColor] = useState("rojo"); // Estado que guarda el color actual

  useEffect(() => {
    // Establecemos un intervalo de 3 segundos para cambiar de color
    const interval = setInterval(() => {
      switch (color) {
        case "rojo":
          setColor("amarillo");
          break;
        case "amarillo":
          setColor("verde");
          break;
        case "verde":
          setColor("rojo");
          break;
        default:
          break;
      }
    }, 3000); // Cambia de color cada 3 segundos

    return () => clearInterval(interval); // Limpiamos el intervalo al desmontar el componente
  }, [color]); // Este efecto se ejecuta cuando el valor de 'color' cambia

  return (
    <div className="semaforo">
      <div className={`luz rojo ${color === "rojo" ? "encendida" : ""}`} />
      <div className={`luz amarillo ${color === "amarillo" ? "encendida" : ""}`} />
      <div className={`luz verde ${color === "verde" ? "encendida" : ""}`} />
    </div>
  );
};

export default Semaforo;
