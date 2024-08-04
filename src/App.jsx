import './App.css';
import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom'
import { General } from './components/layout/General.jsx'
import { Home } from './pages/Home.jsx'
import { Page404 } from './pages/Page404.jsx'
import { SleepingRoom } from './pages/SleepingRoom.jsx';
import { LivingRoom } from './pages/LivingRoom.jsx';
import { Bretagne } from './pages/Bretagne.jsx';
import { Input } from './pages/Input.jsx';


function App() {
  const router = createHashRouter([
    {
      element: <General />,
      errorElement: <Page404 />,
      children: [
        {
          path: '/home',
          element: <Home />,
        },
        {
          path: '/sleepingroom',
          element: <SleepingRoom />,
        },
        {
          path: '/livingroom',
          element: <LivingRoom />,
        },
        {
          path: '/input',
          element: <Input />,
        },
        {
        path: '/bretagne',
        element: <Bretagne />,
        },
      ],
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App;
