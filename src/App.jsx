import { useState, useEffect } from 'react'
import './styles/App.css'
import Api from './components/api'
import Card from './components/card'
import Header from './components/header'
import Footer from './components/footer'
import getRandomNum from './components/hooks'

function App() {
  const [pokemon, setPokemon] = useState({
    allPokemon : [],
    shuffledPokemon: []
  })

  useEffect(() => {
    Api().then((res) => setPokemon({allPokemon: res, shuffledPokemon: [res[0], res[1], res[2]]}))
  }, [])

  const getRandomPokemon = () => {
    return pokemon.allPokemon[getRandomNum(6)]
  }

  const setSeen = (id) => {
    const poke = pokemon.shuffledPokemon.find(obj => obj.id === id)

    poke.seen = true;
  }

  // todo: make sure thats theres always 2 unseen pokemon
  const shuffle = () => {
    const shuffled = [];

    while (shuffled.length < 3) {
      const newPoke = getRandomPokemon();

      if (shuffled.find(obj => obj.id === newPoke.id) === undefined) {
        shuffled.push(newPoke)
      }

    }

    setPokemon({...pokemon, shuffledPokemon: shuffled})
  }

  // return future "seen" var/this func will prob handle checking if card had been seen, once clicked and checked, shuffle/add score etc
  const clickHandler = (e, id) => {
    setSeen(id);
    shuffle()
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
