import './App.css'
import HelloWord from './components/HelloWord'
import Frase from './components/Frase'

function App() {
  const name = 'Guilherme'


  function sum(a, b) {
    return a + b
  }

  const url = 'https://via.placeholder.com/150'

  return (
    <>
      <div className='App'>
       <h2>Alterando o JSX</h2>
       <p>Olá, {name}</p>
       <p>Soma: {sum(1, 2)}</p>
       <img src={url} alt="Imagem" />
       <HelloWord />
      </div>
      <Frase />
    </>
  )
}

export default App
