import React from 'react'

import Slider from '../components/Slider';
import TransitionEffect from '../components/TransitionEffect';

export default function Page() {
  return (
    <section className='relative h-screen w-screen overflow-hidden pt-28 md:pt-5 lg:pt-16 xl:pt-20 2xl:pt-48'>
      <TransitionEffect />
        <img src="https://i.imgur.com/Mw1p9T4.png" className='absolute mix-blend-color-dodge right-0 bottom-0 md:w-7/12 -z-10' alt="explosion" />
        <div className='flex flex-col md:flex-row w-full items-center justify-between'>
            <div className='w-full md:w-3/12'>
                <h3 className='text-4xl lg:text-5xl 2xl:text-6xl font-extrabold tracking-tighter text-center md:text-left'><span className='text-[#FB1F65]'>My</span> Work.</h3>
                <p className='text-lg text-slate-400 mt-4 text-center md:text-left'>These are some of my relevant projects</p>
            </div>

             {/* slider */}
            <div className='w-full md:w-9/12 px-5 mt-16 md:top-0'>
                  <Slider section={'portfolio'}>                  
                  </Slider>
           </div>

        </div>
    </section>
  )
}
