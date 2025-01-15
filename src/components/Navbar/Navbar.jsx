import React from 'react'
import './Navbar.css'
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../utils/images'

const Navbar = () => {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt="app_logo" />
      </div>
      <ul className='app__navbar-links'>
          <li className='p_opensans'><a href="#home">Home</a></li>
          <li className='p_opensans'><a href="#about">Sobre</a></li>
          <li className='p_opensans'><a href="#menu">Menu</a></li>
          <li className='p_opensans'><a href="#awards">Prêmios</a></li>
          <li className='p_opensans'><a href="#contact">Contatos</a></li>
      </ul>
      <div className='app__navbar-login'>
        <a href="#login" className='p_opensans'>Conecte-se / Registra</a> 
        <a href="/" className='p_opensans'>Livro</a>     
      </div>

    </nav>
  )
}

export default Navbar