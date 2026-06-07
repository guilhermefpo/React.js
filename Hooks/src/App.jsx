import "./App.css";
import UseEffect from "./hooks/UseEffect";
import UseReducer from "./hooks/UseReducer";
import UseRef from "./hooks/UseRef";
import UseState from "./hooks/UseState";

function App() {
  return (
    <>
      <h1>UseState:</h1>
      <UseState />
      <br />
      <h1>UseEffect:</h1>
      <UseEffect />
      <br />
      <h1>UseRef:</h1>
      <UseRef />
      <br />
      <h1>UseReducer:</h1>
      <UseReducer />
    </>
  );
}

export default App;
