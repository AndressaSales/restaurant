import React from 'react'

import images from  '../../utils/images'
import SubHeading from '../../components/SubHeading/SubHeading'

const Home = () => {
  return (
    <div id='home' className='bg-primaryblack justify-center flex items-center min-h-[550px] md:minh-[600px]'>
        <div className='container pb-8 md:pb-0'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
              <div className='flex flex-col justify-center gap-6 pt-12 md:pt-0 order-2 md:order-1'>
                <SubHeading title={'Persiga o novo sabor'} />
                <h1 className='text-golden tracking-[0.04em] uppercase leading-[117px] lg:text-5xl md:text-3xl sm:text-base font-serif'>A Chave Para Uma Refeição Requintada</h1>
                <p className='lg:text-[16px] md:text-[16px] sm:text-sm text-white font-normal tracking-[0.04em] capitalize leading-[28px] font-mono' style={{margin: '2rem 0'}}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, ipsa eum laudantium error iusto accusantium culpa facere beatae quasi. Voluptatem, commodi neque. Natus commodi reiciendis, ipsum distinctio rem ullam repellat?
                </p>
                <div>
                  <button type='button' className='cursor-pointer bg-crismson text-primaryblack text-[16px] tracking-[0.04em] font-bold leading-[28px] border-[1px] outline-none' style={{padding: '0.5rem 1.5rem'}}>Explorar Menu</button>
                </div>
              </div>
              <div className='min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative'>
                  <img src={images.welcome} className='lg:w-[450px] w-[300px] ' />
              </div>
            </div>
        </div>      
    </div>
  )
}

export default Home