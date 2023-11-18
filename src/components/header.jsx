import '../styles/header.css'

function Header ({score}) {
  return (
    <>
      <div className="header">
        <h1 className="header-title"><span>Pokemon</span>Memory<span>Game</span></h1>
        <p className="score-banner">Score: <span>{score}/5</span></p>
      </div>
    </>
  )
}

export default Header