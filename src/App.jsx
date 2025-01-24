import Chefs from './components/chefs/Chefs'
import Intro from './components/intro/Intro'
import Navbar from './components/Navbar/Navbar'
import About from './pages/about/About'
import Awards from './pages/awards/Awards'
import Home from './pages/home/Home'
import Menu from './pages/specialMenu/Menu'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Chefs />
      <Intro />
      <Awards />
    </>
  )
}

export default App
