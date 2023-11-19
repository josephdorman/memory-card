import '../styles/gameover.css'

function Gameover ({gameStatus, retryHandler}) {

  if (gameStatus === 'win') {
    return (
      <>
        <div className="modal">
          <div className="modal-content">
            <h2>YOU {gameStatus.toUpperCase()}</h2>
            <button onClick={retryHandler} className='retry'>RETRY</button>
          </div>
        </div>
      </>
    )
  }
  else if (gameStatus === 'lost') {
    return (
    <>
      <div className="modal">
        <div className="modal-content">
          <h2>YOU {gameStatus.toUpperCase()}</h2>
          <button onClick={retryHandler} className='retry'>RETRY</button>
        </div>
      </div>
    </>
    )
  }

  return;
}

export default Gameover