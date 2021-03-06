import React, {useEffect, useState} from "react";
import { Boton } from "./components/botton";
import './App.css';

function App() {
  // * JSX
  // * Javascript en HTML
  // ! Class es una palabra reservada de Javascript
  // ? Hooks son funciones que vienen con React
  // * Use state -> Hook
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("");
  // * UseEffect -> Hook
  useEffect(() => {
    // Ejecuta esto si cambian las variables
    setContador(100);
  }, [nombre]);
  return (
  <div className="App" id="App">
    <div>
      el valor de mi contador es:{contador}
    </div>
    <button
        onClick={() => {
          // Llamamos al hook y le asignamos otro valor al contador
          setContador(contador + 1);
        }}
      >
        Aumentar contador
      </button>
      <button
        onClick={() => {
          // Llamamos al hook y le asignamos otro valor al contador
          setContador(contador - 1);
        }}
      >
        Disminuir contador
      </button>
      <button
        onClick={() => {
          // Llamamos al hook y le asignamos otro valor al contador
          setContador(contador * 0);
        }}
      >
        cero al contador
      </button>
      <input
        value={nombre}
        onChange={(event) => {
          setNombre(event.target.value);
        }}
        placeholder="Ingresa tu nombre"
      />
      <Boton parametro1={"Hola soy el parametro"}/>
      <span>Mi nombre es: {nombre}</span>
      <p>Mi nombre es: {nombre}</p>
    </div>
  );
   
  
}

export default App;
