import "./App.css";
import HellowWord from "./components/HellowWord";
import Frase from "./components/Frase";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";

function App() {
  const name = "Guilherme";
  const nome = "Jane";

  function sum(a = 0, b = 0) {
    return a + b;
  }

  const url = "https://via.placeholder.com/150.png?text=Imagem+150px";

  return (
    <>
      <div className="App">
        <Frase />
        <Frase />
        <h1>Alterando o JSX</h1>
        <p>Olá, {name}</p>
        <p>Soma: {sum(1, 2)}</p>
        <SayMyName nome="Guilherme" />
        <SayMyName nome={nome} />
        <Pessoa nome="Rodrigo" idade="27" prifissao="Programador" foto={url} />
      </div>
    </>
  );
}

export default App;
