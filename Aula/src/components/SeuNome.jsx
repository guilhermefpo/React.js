import React from "react";

function SeuNome({ setNome }) {
  return (
    <div>
      <p>Digite o seu nome: </p>
      <input
        type="text"
        placeholder="Qual é seu nome?"
        onChange={(e) => setNome(e.target.value)}
      />
    </div>
  );
}

export default SeuNome;
