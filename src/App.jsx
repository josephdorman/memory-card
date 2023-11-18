import { useState, useEffect } from 'react'
import './styles/App.css'
import Api from './components/api'
import Card from './components/card'
import Header from './components/header'
import Footer from './components/footer'

function App() {
  const [pokemon, setPokemon] = useState({
    allPokemon : [],
    shuffledPokemon: []
  })

  useEffect(() => {
    Api().then((res) => setPokemon({...pokemon, allPokemon: res}))
  }, [])

  return (
    <>
      <Header></Header>
      <div className="body">
        <div className="card-container">
          <Card pokemon={pokemon}></Card>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
