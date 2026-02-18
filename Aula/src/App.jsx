import "./App.css";
import HellowWord from "./components/HellowWord";
import Frase from "./components/Frase";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import List from "./components/List";

function App() {
  const name = "Guilherme";
  const nome = "Jane";

  const url = "https://via.placeholder.com/150.png?text=Imagem+150px";

  return (
    <>
      <div className="App">
        <Frase />
        <Frase />
        <h1>Alterando o JSX</h1>
        <p>Olá, {name}</p>
        <SayMyName nome="Guilherme" />
        <SayMyName nome={nome} />
        <Pessoa nome="Rodrigo" idade="27" prifissao="Programador" foto={url} />
        <List />
      </div>
    </>
  );
}

export default App;
