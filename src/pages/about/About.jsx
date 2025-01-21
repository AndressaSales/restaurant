import React from 'react'
import banner from '../../assets/bg.png'
import images from '../../utils/images'
const About = () => {
  return (
    <div className='w-full h-[100vh] justify-center items-center flex' style={{backgroundImage: `url(${banner})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'repeat', backgroundAttachment: 'fixed'}}>
        <div className='w-[30%]'>
            <img src={images.G} alt="g" />
        </div>
    </div>
  )
}

export default About