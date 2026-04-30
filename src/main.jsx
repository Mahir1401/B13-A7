import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Mainlayout from './components/Mainlayout'
import Home from './components/Home'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Timeline from './components/Timeline'
import Stat from './components/Stat'
import Error from './components/Error'
import FriendDetails from './components/FriendDetails'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement: <Error />,
    children: [
      { index: true, 
        element: <Home /> 
      },
      { path: "/timeline", 
        element: <Timeline /> 
      },
      { path: "/stats", 
        element: <Stat /> 
      },
      { path: "/friend/:id", 
        element: <FriendDetails /> 
      },
    ],
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
