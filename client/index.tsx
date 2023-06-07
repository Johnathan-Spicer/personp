import { createRoot } from 'react-dom/client' // covered on Monday
import { RouterProvider } from 'react-router-dom'

import { routes } from './components/routes'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <RouterProvider router={routes} />
  )
})
