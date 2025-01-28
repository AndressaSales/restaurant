import React, { useEffect, useRef, useState } from 'react'
import images from '../../utils/images'
import { motion } from 'framer-motion'

const GalleryCarrosel = () => {

  const carrosel = useRef()
  const [width, setWidth] =  useState(0)

  useEffect(() => {
    console.log(carrosel.current?.scrollWidth, carrosel.current?.offsetWidth)
    setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth)
  }, [])

  const galletyImgens = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

  return (
    <div ref={carrosel} className='flex items-center justify-center lg:max-w-[650px] md:max-w-[650px] sm:max-w-[300px]' style={{margin: '0 auto'}}>
      <motion.div className='cursor-grab overflow-hidden'>
        <motion.div 
          className='flex'
          whileTap={{cursor: 'grabbing'}}
          drag='x'
          dragConstraints={{right: 0, left: -width}}
          initial={{x: 100}}
          animate={{x: 0}}
          transition={{duration: 0.8}}
        >
          {
            galletyImgens.map((img) => {
              return(
                <motion.div key={img} className='min-h-[447px] min-w-[301px] p-[14px]  '>
                  <img src={img} alt="images" className='w-full h-[90%] object-cover rounded-[12px] pointer-events-none' />
                </motion.div>
              )
            })
          }
        </motion.div>
      </motion.div>
    </div>
  )
}

export default GalleryCarrosel