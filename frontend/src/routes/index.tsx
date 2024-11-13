import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import ProtectedRoute from '../components/ProtectedRoute'
import Account from '../pages/account'
import Home from '../pages/home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: '/account',
            element: <Account />
          }
        ]
      },
    ]
  },
])

export default router
