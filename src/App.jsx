import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import { Layout } from "./components/Layout.jsx"
import { Home } from "./pages/Home.jsx"
import { Page404 } from "./pages/Page404.jsx"
import { Toto } from "./pages/Toto.jsx"


function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <Page404 />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/toto",
          element: <Toto />,
        },
      ],
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App;


/*import { Header } from "./components/Header.jsx";
import { Footer } from "./components/Footer.jsx";
import { Home } from "./pages/Home.jsx";

function App() {

  return (
    <>
      <Header />
        <Home />
      <Footer />
    </>
  );
}

export default App;*/
