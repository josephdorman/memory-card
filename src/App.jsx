import { useState, useEffect } from 'react'
import './styles/App.css'
import Api from './components/api'
import Card from './components/card'
import Header from './components/header'

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    Api().then((res) => setPokemon(res))
  }, [])

  return (
    <>
      <Header></Header>
      <div className="body">
        <div className="card-container">
          <Card pokemon={pokemon}></Card>
        </div>
      </div>
    </>
  )
}

export default App
