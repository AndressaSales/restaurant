import React from 'react'

const ResponseNavbar = ({menu, setMenu}) => {
  return (
    <div className={`${menu ? "left-0" : "left-[100%]"} fixed bottom-0 top-0 flex h-screen w-[75%] flex-col justify-center bg-[#0C0C0C] px-8 pb-16 text-[#DCCA87]`}>
      <div>
        <ul className='flex flex-col space-y-4 text-xl text-center'>
          <li onClick={() => setMenu(false)}><a href="#home">Home</a></li>
          <li onClick={() => setMenu(false)}><a href="#about">Sobre</a></li>
          <li onClick={() => setMenu(false)}><a href="#menu">Menu</a></li>
          <li onClick={() => setMenu(false)}><a href="#awards">Prêmios</a></li>
          <li onClick={() => setMenu(false)}><a href="#contact">Contatos</a></li>
        </ul>
      </div>
    </div>
  )
}

export default ResponseNavbar