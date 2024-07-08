import './App.css';
import { Header } from "./components/Header.jsx";
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

export default App;
