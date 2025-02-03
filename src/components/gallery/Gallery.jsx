import React from 'react'
import SubHeading from '../../components/SubHeading/SubHeading'
import './Gallery.css'
import GalleryCarrosel from './GalleryCarrosel'

const Gallery = () => {
  return (
    <div className=' bg-primaryblack justify-center items-center flex lg:flex-row md:flex-col sm:flex-col' style={{padding: '4rem 0 4rem 6rem'}}>
      <div className='flex justify-center lg:items-start sm:items-center flex-col min-w-[700px] pr-[2rem]'>
        <SubHeading title='Instagram' />
        <h1 className='capitaliza font-serif text-golden tracking-tighte-[0.04em] lg:text-5xl md:text-3xl sm:text-2xl pb-6'>Fotos da Galeria</h1>
        <p className='font-mono font-normal capitalize text-grey' style={{margin: '2rem 0'}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ut officia repellendus. Accusamus maxime cupiditate, quae maiores ullam ipsum! Obcaecati rem est rerum consequatur perferendis! Inventore quam unde cupiditate officia.
        </p>
      </div>
      <div>
        <GalleryCarrosel />
      </div>
    </div>
  )
}

export default Gallery