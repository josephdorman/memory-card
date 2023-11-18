import { useState, useEffect } from 'react'
import './styles/App.css'
import Api from './components/api'
import Card from './components/card'
import Header from './components/header'
import Footer from './components/footer'
import getRandomNum from './components/hooks'

function App() {
  const [score, setScore] = useState(0)
  const [pokemon, setPokemon] = useState({
    allPokemon : [],
    shuffledPokemon: []
  })

  useEffect(() => {
    Api().then((res) => setPokemon({allPokemon: res, shuffledPokemon: [res[0], res[1], res[2], res[3], res[4]]}))
  }, [])

  useEffect(() => {
    if (score === 5) {
      console.log('win from use effect');
    }
  }, [score])

  const getRandomPokemon = () => {
    return pokemon.allPokemon[getRandomNum(pokemon.allPokemon.length - 1)]
  }

  const setSeen = (id) => {
    const poke = pokemon.shuffledPokemon.find(obj => obj.id === id)

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

    // lose condition
    if (checkSeen(poke) === true) {
      console.log('lose')
    } // add score
    else if (checkSeen(poke) === false) {
      setScore(score + 1);
      console.log(score)
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
        if (checkSeen(newPoke) === false && unseen !== 0) {
          shuffled.push(newPoke)
          unseen--;
        } // if unseen = 0 then array already has 2 unseen cards, fill in the rest of the array w whatever
        else if (unseen === 0) {
          shuffled.push(newPoke)
        }
        
      }

    }

    setPokemon({...pokemon, shuffledPokemon: shuffled})
  }

  // return future "seen" var/this func will prob handle checking if card had been seen, once clicked and checked, shuffle/add score etc
  const clickHandler = (e, id) => {
    checkGameover(id);
    setSeen(id);
    shuffle();
  }

  return (
    <>
      <Header score={score}></Header>
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
