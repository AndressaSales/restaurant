import React, { useState } from 'react'
import './Navbar.css'
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import images from '../../utils/images'
import ResponseNavbar from './ResponseNavbar';

const Navbar = () => {

  const [menu, setMenu] = useState(false)

  const toogleMenu = () => {
    setMenu(!menu)
  }

  return (
    <nav className='flex justify-between items-center bg-[#0C0C0C] app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt="app_logo" />
      </div>
      <div className='hidden md:block'>
        <ul className='app__navbar-links'>
          <li className='p_opensans'><a href="#home">Home</a></li>
          <li className='p_opensans'><a href="#about">Sobre</a></li>
          <li className='p_opensans'><a href="#menu">Menu</a></li>
          <li className='p_opensans'><a href="#awards">Prêmios</a></li>
          <li className='p_opensans'><a href="#contact">Contatos</a></li>
        </ul>
      </div>
      <div className='app__navbar-login'>
        <a href="#login" className='p_opensans'>Conecte-se / Registra</a>
        <div/>
        <a href="/" className='p_opensans'>Livro</a>      
      </div>
        {
          menu ? (
            <HiMenuAlt1 size={30} className='cursor-pointer transition-all md:hidden text-[#fff]' onClick={toogleMenu} />
          ) : (
            <HiMenuAlt3 size={30} className='cursor-pointer transition-all md:hidden text-[#fff]' onClick={toogleMenu} />
          )
        }
        <ResponseNavbar  menu={menu} setMenu={setMenu} />
    </nav>
  )
}

export default Navbar