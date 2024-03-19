import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer saludo="Hola Mundo!" nombre="Gabriel"/>
    </div>
  )
}

export default App
