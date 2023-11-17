import '../styles/footer.css'
import github from '/icons8-github.svg'

function Footer () {
  return (
    <>
      <footer>
        <p className='credit'>Create by<span className='bold'>Joseph Dorman</span><img src={github} className="s-logo"></img></p>
      </footer>
    </>
  )
}

export default Footer