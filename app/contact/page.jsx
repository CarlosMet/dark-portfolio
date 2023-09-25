import React from 'react'
import TransitionEffect from '../components/TransitionEffect'

export default function Page() {
  return (
    <section className='w-screen h-screen flex flex-col lg:flex-row items-center gap-10 lg:gap-0 pt-24 md:pt-7 lg:pt-0 lg:justify-between'>
        <TransitionEffect />
        <img src="https://i.imgur.com/Mw1p9T4.png" className='absolute mix-blend-color-dodge right-0 bottom-0 md:w-7/12 -z-10' alt="explosion" />
        <div className='w-full lg:w-5/12'>
            <h3 className='text-center lg:text-left font-extrabold text-4xl lg:text-5xl 2xl:text-6xl tracking-tighter'>Let's get in <span className='text-[#FB1F65]'>touch.</span></h3>
            <p className='text-slate-400 text-lg tracking-tight'></p>
        </div>

        <form className='w-full lg:w-6/12' action="">
            <div className='flex w-full items-center justify-between'>
                <div className='w-[48%]'>
                    <label className='text-slate-400' htmlFor="">Name</label><br />
                    <input type="text" className='bg-white/5 focus:outline-none border border-slate-400 rounded-lg w-full px-2 lg:px-4 py-3 md:py-1 lg:py-3' />
                </div>
                <div className='w-[48%]'>
                    <label className='text-slate-400' htmlFor="">Lastname</label><br />
                    <input type="text" className='bg-white/5 focus:outline-none border border-slate-400 rounded-lg w-full px-2 lg:px-4 py-3 md:py-1 lg:py-3' />
                </div>
                
            </div>

            <div className='mt-2'>
                <label className='text-slate-400' htmlFor="">E-mail</label><br />
                <input type="email" className='bg-white/5 focus:outline-none border border-slate-400 rounded-lg w-full px-2 lg:px-4 py-3 md:py-1 lg:py-3' />
            </div>

            <div className='mt-3'>
                <label className='text-slate-400' htmlFor="">Message</label><br />
                <input type="text" className='bg-white/5 focus:outline-none border border-slate-400 rounded-lg w-full px-2 lg:px-4 py-2 h-24 md:h-20 lg:h-28' />
            </div>
            
            <button className='bg-transparent border-2 border-[#FB1F65] mt-6 w-44 mx-auto block py-2 md:py-1 lg:py-2 xl:py-3 rounded-3xl text-slate-300 font-bold text-xl' type="submit">
                Send
            </button>
            

        </form>

    </section>
  )
}
