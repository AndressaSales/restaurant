import React from 'react'
import SubHeading from '../../components/SubHeading/SubHeading'
import './Gallery.css'
import GalleryCarrosel from './GalleryCarrosel'

const Gallery = () => {
  return (
    <div className=' bg-primaryblack justify-center items-center flex flex-row' style={{padding: '4rem 0 4rem 6rem'}}>
      <div className='flex-[1] flex justify-center items-start flex-col min-w-[500px] pr-[2rem]'>
        <SubHeading title='Instagram' />
        <h1 className='capitaliza font-serif text-golden tracking-tighte-[0.04em] lg:text-5xl md:text-3xl sm:text-2xl'>Fotos da Galeria</h1>
        <p className='font-mono font-normal capitalize' style={{color: '#aaa', margin: '2rem 0'}}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam est laudantium consectetur quia quos ea officiis qui ullam, corrupti repellendus illo dicta impedit in vero voluptates, accusantium debitis aut dolore.
        </p>
        <button className='bg-crismson text-primaryblack text-[16px]tracking-[0.04em] font-bold leading-[28px] outline-none' style={{padding: '0.5rem 1.5rem'}}>Ver Mais</button>
      </div>
      <div className='flex flex-[1] flex-row max-w-[50%] relative'>
          <div className=''>
              <GalleryCarrosel />
          </div>
      </div>
    </div>
  )
}

export default Gallery