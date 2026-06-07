import React from "react";
import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);
  const [ex1, setEx1] = useState(0);

  const IncrementCount = () => {
    setCount((prev) => prev + 1);
  };

  const contadorAumentar = () => {
    setEx1((prev) => prev + 1);
  };

  const contadorDiminuir = () => {
    setEx1((prev) => prev - 1);
  };

  const resetarContador = () => {
    setEx1(0);
  };

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={IncrementCount}>Increment</button>
      </div>
      <div>
        <h1>{ex1}</h1>
        <button onClick={contadorAumentar}>Aumentar</button>
        <button onClick={contadorDiminuir}>Diminuir</button>
        <button onClick={resetarContador}>Resetar</button>
      </div>
    </>
  );
}

export default UseState;
