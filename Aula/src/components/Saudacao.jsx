import React from "react";

function Saudacao({ nome }) {
  return (
    <>
      <p>{nome}</p>
    </>
  );
}

export default Saudacao;

/*

import { useState } from "react";
import "./App.css";
import SeuNome from "./components/SeuNome";
import Saudacao from "./components/saudacao";

function App() {
  const [nome, setNome] = useState();
  return (
    <>
      <div className="App">
        <h1>State Lift</h1>
        <SeuNome setNome={setNome} />
        <Saudacao nome={nome} />
      </div>
    </>
  );
}

export default App;

*/
