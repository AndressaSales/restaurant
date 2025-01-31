import React from 'react'
import banner from '../../assets/bg.png'
import images from '../../utils/images'
const About = () => {
  return (
    <div id='about' className='w-full h-[100vh] justify-center items-center flex relative' style={{backgroundImage: `url(${banner})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'repeat', backgroundAttachment: 'fixed'}}>
        <div className='inset-0 absolute justify-center items-center flex'>
            <img src={images.G} alt="g" className='w-[391px] h-[415px] z-0' />
        </div>
        <div className='container justify-center items-center z-[2]
        flex md:flex-row lg:flex-row'>
          <div className='flex-1 flex justify-end flex-col text-right items-end'>
            <h1 className='text-golden lg:text-[64px] md:text-[64px] sm:text-4xl font-serif tracking-[0.04em] capitalize'>Sobre Nós</h1>
            <img src={images.spoon} className='w-[50px]' />
            <p className='text-grey font-normal text-[16px] tracking-[0.04em] capitalize leading-[28px] font-mono' style={{margin: '2rem 0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sequi quisquam veritatis architecto dicta amet velit ex ullam non at adipisci totam suscipit, voluptates exercitationem inventore accusamus. Odit, eveniet ut?</p>
            <button type='button' className='cursor-pointer bg-crismson text-primaryblack text-[16px] tracking-[0.04em] leading-[28px] border-[1px] outline-none font-bold' style={{padding: '0.5rem 1.5rem'}}>Saiba Mais</button>
          </div>u8
          <div className='hidden md:block' style={{margin: '2rem 4rem'}}>
            <img src={images.knife} className='lg:w-[70px] md:w-[50px]' />
          </div>
          <div className='flex-1 flex justify-start items-start flex-col text-left'>
            <h1 className='text-golden lg:text-[64px] md:text-[64px] sm:text-4xl capitalize font-serif tracking-[0.04em]'>Nossa História</h1>
            <img src={images.spoon} className='w-[50px]' />
            <p className='text-grey font-mono font-normal text-[16px] tracking-[0.04em] capitalize leading-[28px]' style={{margin: '2rem 0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sequi quisquam veritatis architecto dicta amet velit ex ullam non at adipisci totam suscipit, voluptates exercitationem inventore accusamus. Odit, eveniet ut?</p>
            <button className='bg-crismson text-primaryblack text-[16px] tracking-[0.04em] font-bold leading-[28px] border-[1px] outline-none' style={{padding: '0.5rem 1.5rem'}}>Saiba Mais</button>
          </div>
        </div>
    </div>
  )
}

export default About