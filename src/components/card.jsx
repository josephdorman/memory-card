import '../styles/card.css'

function Card ({pokemon}) {
  return (
    <>
      { 
        pokemon.allPokemon.map(element => {
          if (pokemon.length === 0) {
            return false;
          }
          return (
            <div key={element.id} className='card'>
              <div className="img-container">
                <img src={element.sprite} className='card-img'></img>
              </div>
              <h2 className='card-name'>{element.name.charAt(0).toUpperCase() + element.name.slice(1)}</h2>
            </div>
          )
        })
      }
    </>
  )
  
}

export default Card