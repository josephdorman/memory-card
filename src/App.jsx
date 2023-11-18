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
    Api().then((res) => setPokemon({allPokemon: res, shuffledPokemon: [res[0], res[1], res[2], res[3], res[4]]}))
  }, [])

  const getRandomPokemon = () => {
    return pokemon.allPokemon[getRandomNum(6)]
  }

  const setSeen = (id) => {
    const poke = pokemon.shuffledPokemon.find(obj => obj.id === id)

    console.log(poke);

    poke.seen = true;
  }

  const checkSeen = (poke) => {
    if (poke.seen === true) {
      return true
    }
    else {
      return false
    }

  }

  const checkGameover = (id) => {
    const poke = pokemon.shuffledPokemon.find(obj => obj.id === id)

    if (checkSeen(poke) === true) {
      console.log('seen')
    }
    else if (checkSeen(poke) === false) {
      console.log('not seen')
    }

  }

  // todo: make sure thats theres always 2 unseen pokemon
  const shuffle = () => {
    const shuffled = [];
    let unseen = 2;

    while (shuffled.length < 5) {
      const newPoke = getRandomPokemon();

      // if not in list continue
      if (shuffled.find(obj => obj.id === newPoke.id) === undefined) {
        // if not seen, push
        if (!checkSeen(newPoke) && unseen !== 0) {
          shuffled.push(newPoke)
          unseen--;
        } // if unseen = 0 then array already has 2 unseen cards, fill in the rest of the array w whatever
        else if (unseen === 0) {
          shuffled.push(newPoke)
        }
        
      }

    }

    console.log(shuffled)

    setPokemon({...pokemon, shuffledPokemon: shuffled})
  }

  // return future "seen" var/this func will prob handle checking if card had been seen, once clicked and checked, shuffle/add score etc
  const clickHandler = (e, id) => {
    checkGameover(id);
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
