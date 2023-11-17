import { useState, useEffect } from 'react'
import './styles/App.css'
import Api from './components/api'
import Card from './components/card'

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    Api().then((res) => setPokemon(res))
  }, [])

  return (
    <>
      <div className="card-container">
        <Card pokemon={pokemon}></Card>
      </div>
    </>
  )
}

export default App
