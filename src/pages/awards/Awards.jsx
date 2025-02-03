import React from 'react'
import images  from '../../utils/images'
import SubHeading from '../../components/SubHeading/SubHeading'
import data from '../../utils/data'
import AwardsCard from '../../components/awardsCard/AwardsCard'

const Awards = () => {
  return (
    <div id='awards' className='bg-primaryblack h-[100vh] w-[100%] justify-center items-center grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mb-0 sm:mb-20'>
        <div className='container'>
            <SubHeading title='Prêmios & Reconhecimento'/>
            <h1 className='text-golden tracking-[0.04em] capitalize leading-[117px] lg:text-5xl text-3xl font-serif'>Nossos Prêmios</h1>
            <div className='grid grid-cols-2 py-2 gap-6'>
                {
                    data.awards.map((award) => <AwardsCard award={award} key={award.title} title={award.title} subtitle={award.subtitle} imageUrl={award.imgUrl}  /> )
                }
            </div>
        </div>
        <div className='items-center justify-center flex py-2'>
            <img src={images.laurels} alt="laurels" className='lg:w-[60%] md:w-[60%] w-[40%]'  />
        </div>
    </div>
  )
}

export default Awards