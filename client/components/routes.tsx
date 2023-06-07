import {createBrowserRouter, createRoutesFromElements, Route,} from 'react-router-dom'

import App from './App'
import Home from './Home'

export const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />}></Route>
    </Route>
  )
)