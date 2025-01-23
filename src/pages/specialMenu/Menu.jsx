import React from 'react'
import images from '../../utils/images'
import data from '../../utils/data'
import SubHeading from '../../components/SubHeading/SubHeading'
import MenuItem from '../../components/menuItem/MenuItem'

const Menu = () => {
  return (
    <div id='menu' className='bg-primaryblack h-[100vh] w-[100%]'>
      <div className='container justify-center flex items-center flex-col pb-6'>
        <SubHeading title='Menu Que Se Adapta ao Seu Paladar' />
        <h1 className='text-golden font-serif font-bold text-[64px] leading-[0.04em] capitalize pt-5 sm:text-5xl'>Especial de Hoje</h1>
      </div>
      <div className='w-full flex items-start justify-center lg:flex-row md:flex-row text-white flex-col sm:items-center' style={{margin: '2rem 0'}}>
        <div>
          <p className='text-white font-mono text-2xl text-center font-semibold leading-[58.5px]'>Vinho & Cerveja</p>
          <div>
            {
              data.wines.map((wine) => {
                return(
                  <div>
                    <MenuItem key={wine.title} title={wine.title} price={wine.price} tags={wine.tags} />
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className='hidden md:block'>
          <img src={images.menu} alt="menu item" className='w-[210px]' style={{margin: '0 2rem'}} />
        </div>
        <div>
            <p className='text-white font-mono text-2xl text-center font-semibold leading-[58.5px]'>Coquetel</p>
            <div>
              {
                data.cocktails.map((cocktail)=> {
                  return(
                    <div>
                      <MenuItem key={cocktail.title} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
                    </div>
                  )
                })
              }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Menu