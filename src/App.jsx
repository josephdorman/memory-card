import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Api from './components/api'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    Api().then((res) => setPokemon(res))
  }, [])

  return (
    <>
      
    </>
  )
}

export default App
