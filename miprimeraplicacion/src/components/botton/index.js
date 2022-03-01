import React, { useState } from "react";
import "./style.css";
export function Boton({ parametro1 }) {
  const [textoBoton, setTextoBoton] = useState("Soy un boton");
  return (
    <button
      className="boton-componente"
      onClick={() => {
        setTextoBoton("Soy Alex Yzmin");
      }}
    >
      {parametro1}
    </button>
  );
}