import React from 'react'

const MenuItem = ({ title, price, tags,  }) => {
  return (
    <div className='w-full flex flex-col' style={{margin: '1rem 0'}}>
     <div className='flex justify-between items-center'>
          <div className='flex-1'>
            <p style={{color: '#dcca87'}}>{title}</p>
          </div>
          <div className='w-[90px] h-[1px] bg-golden'style={{margin: '0 1rem'}} />
          <div className='flex justify-end items-end flex-row'>
            <p>{price}</p>
          </div>
        </div>
        <div className='w-full mp-[0.2rem]'>
          <p style={{color: '#aaa'}}>{tags}</p>
        </div>
    </div>
  )
}

export default MenuItem