import '../styles/header.css'

function Header () {
  return (
    <>
      <div className="header">
        <h1 className="header-title">Pokemon Memory Game</h1>
        <div className="score">0/5</div>
      </div>
    </>
  )
}

export default Header