import React from "react";

function OutraLista({ itens }) {
  return (
    <>
      <h3>Lista de coisas boas:</h3>
      {itens.length > 0 ? (
        itens.map((item, index) => {
          return <p key={index}>{item}</p>;
        })
      ) : (
        <p>Não há itens na lista</p>
      )}
    </>
  );
}

export default OutraLista;

/* 

import "./App.css";
import OutraLista from "./components/OutraLista";

function App() {
  const meusItens = ["React", "Vue", "Angular"];
  return (
    <>
      <div className="App">
        <h1>Renderização de Lista</h1>
        <OutraLista itens={meusItens} />
      </div>
    </>
  );
}

export default App;
 */
