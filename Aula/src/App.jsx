import "./App.css";
import Evento from "./components/Evento";
import Frase from "./components/Frase";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import List from "./components/List";
import Form from "./components/Form";

function App() {
  const nome = "Jane";

  const url = "https://via.placeholder.com/150.png?text=Imagem+150px";

  return (
    <>
      <div className="App">
        <Frase />
        <SayMyName nome={nome} />
        <Pessoa nome="Rodrigo" idade="27" prifissao="Programador" foto={url} />
        <List />
      </div>
      <Evento />
      <Form />
    </>
  );
}

export default App;
