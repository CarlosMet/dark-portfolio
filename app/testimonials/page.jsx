import React from 'react'
import Slider from '../components/Slider'

export default function Page() {
  return (
    <section className='w-screen h-calc(100vh - 96px) md:h-screen flex flex-col lg:flex-row items-center pt-6 md:pt-3 gap-5 lg:gap-0 justify-center lg:pt-0 lg:justify-between relative'>
        <img src="https://i.imgur.com/Mw1p9T4.png" className='absolute mix-blend-color-dodge right-0 bottom-0 md:w-7/12 -z-10' alt="explosion" />
        <div className='w-full lg:w-3/12'>
            <h3 className='text-4xl lg:text-5xl 2xl:text-6xl font-extrabold tracking-tighter text-center lg:text-left items-center lg:items-start'>What 
              <br />  <span className='text-[#FB1F65]'> Clients Say.</span>
            </h3>
        </div>

        <div className='w-full lg:w-8/12'>
          <Slider section={'testimonials'}>

          </Slider>
        </div>
    </section>
  )
}
