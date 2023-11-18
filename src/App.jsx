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

  // return future "seen" var/this func will prob handle checking if card had been seen, once clicked and checked, shuffle/add score etc
  const clickHandler = (e, id) => {
    console.log(e.target, id);
  }

  const shuffle = () => {
    
  }

  return (
    <>
      <Header></Header>
      <div className="body">
        <div className="card-container">
          <Card pokemon={pokemon} clickHandler={clickHandler}></Card>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
