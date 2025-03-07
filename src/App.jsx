import Chefs from './components/chefs/Chefs'
import Gallery from './components/gallery/Gallery'
import Intro from './components/intro/Intro'
import Navbar from './components/Navbar/Navbar'
import About from './pages/about/About'
import Awards from './pages/awards/Awards'
import Findus from './pages/findus/Findus'
import Home from './pages/home/Home'
import Menu from './pages/specialMenu/Menu'
import Footer from './components/Footer/Footer'

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
      <Gallery />
      <Findus />
      <Footer />
    </>
  )
}

export default App
