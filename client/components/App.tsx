import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Sidebar from './Sidebar'

function App () {
  return (
    <>
      <Sidebar />
      <Nav />
      <Outlet />
    </>
  )
}

export default App
