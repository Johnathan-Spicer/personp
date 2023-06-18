import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>

      <ul>
        <Link to="/">
        <img src="/Johnathanlogo.png" id='Johnathan'/>
        </Link>
      </ul>

      <div className='navbar'>
      <ul>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>room</a></li>
        <li><a href='#'>bed</a></li>
        <li><a href='#'>ARTICLES</a></li>
        <li><a href='#'>sleep</a></li>
      </ul>
    </div>
    </>
  )
}

export default Nav
