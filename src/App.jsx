import './App.css';
import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom'
import { General } from './components/layout/General.jsx'
import { Home } from './pages/Home/Home.jsx'
import { Page404 } from './pages/Page404/Page404.jsx'
import { SleepingRoom } from './pages/SleepingRoom/SleepingRoom.jsx';
import { LivingRoom } from './pages/LivingRoom/LivingRoom.jsx';
import { Clues } from './pages/Clues/Clues.jsx';
import { Input } from './pages/Input/Input.jsx';
import { Bretagne } from './pages/Bretagne/Bretagne.jsx';
import { Introduction } from './pages/Introduction/Introduction.jsx';

function App() {
  const router = createHashRouter([
    {
      element: <General />,
      errorElement: <Page404 />,
      children: [
        {
          path: '/',
          element: <Introduction />,
        },
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
          path: '/clues',
          element: <Clues />,
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
