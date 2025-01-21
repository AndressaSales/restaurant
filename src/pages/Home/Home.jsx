import React from 'react'

import images from  '../../utils/images'
import SubHeading from '../../components/SubHeading/SubHeading'

const Home = () => {
  return (
    <div id='home' className='bg-primaryblack h-[100vh] w-full justify-between items-center grid grid-cols-1 lg:grid-cols-2'>

        <div className='container'>
          <SubHeading title='perseguir o novo sabor' />
          <h1 className='text-golden tracking-[0.04em] uppercase leading-[117px] text-5xl md:text-3xl sm:text-base font-serif'>A Chave Para Uma Refeição Requintada</h1>
          <p className='text-[16px] text-white font-normal tracking-[0.04em] capitalize leading-[28px] font-mono' style={{margin: '2rem 0'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis est, maiores iusto blanditiis laborum temporibus doloremque aperiam reprehenderit consequatur fugiat ratione! Et velit necessitatibus asperiores labore quasi doloribus ipsum animi!
          </p>
          <button type='button' className='cursor-pointer bg-crismson text-primaryblack text-[16px] tracking-[0.04em] font-bold leading-[28px] border-[1px] outline-none' style={{padding: '0.5rem 1.5rem'}}>Explorar Menu</button>
        </div>
        <div className='w-[60%] container'>
          <img src={images.welcome}  />
        </div>
    </div>
  )
}

export default Home