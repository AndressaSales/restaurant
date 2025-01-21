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
    <nav className='flex justify-between items-center bg-primaryblack ' style={{padding: '1rem 2rem'}}>
      <div className='flex justify-start items-center'>
        <img src={images.gericht} alt="app_logo"  className='w-[150px]' />
      </div>
      <div className='hidden md:block'>
        <ul className='text-white flex-1 flex justify-center items-center' style={{listStyle: 'none'}}>
          <li className='font-bold hover:text-grey' style={{margin: '0 1rem'}}><a href="#home">Home</a></li>
          <li className='font-bold hover:text-grey' style={{margin: '0 1rem'}}><a href="#about">Sobre</a></li>
          <li className='font-bold hover:text-grey' style={{margin: '0 1rem'}}><a href="#menu">Menu</a></li>
          <li className='font-bold hover:text-grey' style={{margin: '0 1rem'}}><a href="#awards">Prêmios</a></li>
          <li className='font-bold hover:text-grey' style={{margin: '0 1rem'}}><a href="#contact">Contatos</a></li>
        </ul>
      </div>
      <div className='flex items-center justify-start text-white'>
        <a href="#login" style={{margin: '0 1rem', textDecoration: 'none', transition: '0.5s ease'}}>Conecte-se / Registra</a>
        <div className='w-[1px] h-[30px] bg-grey'/>
        <a href="/" style={{margin: '0 1rem', textDecoration: 'none', transition: '0.5s ease'}}>Livro</a>      
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