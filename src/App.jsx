import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './pages/about/About'
import Home from './pages/home/Home'
import Menu from './pages/specialMenu/Menu'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
    </>
  )
}

export default App
