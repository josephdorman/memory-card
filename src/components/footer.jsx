import '../styles/footer.css'
import github from '/icons8-github.svg'

function Footer () {
  return (
    <>
      <footer>
        <p className='credit'>Create by<span className='bold'>Joseph Dorman</span><button className='github'><a href="https://github.com/josephdorman" target="_blank" rel="noopener noreferrer"><img src={github} className="s-logo"></img></a></button></p>
      </footer>
    </>
  )
}

export default Footer