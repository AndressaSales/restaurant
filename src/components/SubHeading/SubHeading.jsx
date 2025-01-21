import React from 'react'
import images from '../../utils/images'

const SubHeading = ({title}) => {
  return (
    <div style={{marginBottom: '1rem'}}>
      <p className='text-white font-family'>{title}</p>
      <img src={images.spoon} className='w-[50px]' />
    </div>
  )
}

export default SubHeading