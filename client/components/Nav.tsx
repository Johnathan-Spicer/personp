import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <ul>
        <Link to="/">
        <img src="/Johnathanlogo.png" />
          <li className='HomeTitle'>Home</li>
        </Link>
      </ul>
    </>
  )
}

export default Nav
