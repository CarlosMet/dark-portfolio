import React from 'react'
import Slider from '../components/Slider'

export default function Page() {
  return (
    <section className='w-screen h-screen flex flex-col lg:flex-row items-center pt-6 gap-2 lg:gap-0 lg:pt-0 lg:justify-between'>
        <div className='w-full lg:w-3/12'>
            <h3 className='text-4xl lg:text-5xl 2xl:text-6xl font-extrabold tracking-tighter text-center md:text-left items-center lg:items-start'>What 
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
