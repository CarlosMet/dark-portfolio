import React from 'react'

export default function Page() {
  return (
    <section className='w-screen h-screen relative flex items-center flex-col lg:flex-row lg:justify-center pt-12 md:pt-8 lg:pt-0'>
        <img src="https://i.imgur.com/Mw1p9T4.png" className='absolute mix-blend-color-dodge right-0 bottom-0 md:w-7/12 -z-10' alt="explosion" />
        <img className='w-[350px] 2xl:w-[500px] hidden lg:block absolute -z-10 left-0 bottom-0 -translate-x-1/2' src="https://i.imgur.com/OTdKfwe.png" alt="" />
        <div className='flex flex-col lg:flex-row justify-center gap-6 lg:gap-0 w-full'>
            <div className='w-full lg:w-5/12'>
                <h3 className='text-4xl lg:text-5xl 2xl:text-6xl font-extrabold tracking-tighter text-center md:text-left items-center lg:items-start'>Let's Bring <span className='text-[#FB1F65]'>
                Your Website</span> To Digital Life.</h3>
                <p className='text-lg text-slate-300 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt inventore odit soluta. Omnis quaerat iste consequuntur illum, ducimus, odio dicta iusto debitis sunt explicabo cupiditate doloremque rerum consequatur molestias voluptates? Ull.</p>
            </div>

            <div className='w-full lg:w-5/12 lg:pl-6'>
                <p className='text-2xl text-slate-200 font-semibold underline underline-offset-4'>Skills</p>
                <p className='text-slate-400 mt-6'>Web development</p>
                <p>Design</p>
                <p>English</p>
            </div>
        </div>
    </section>
  )
}
