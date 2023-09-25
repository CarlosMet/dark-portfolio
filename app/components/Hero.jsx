"use client"
import React from 'react'
import { Poppins } from 'next/font/google'
import { motion } from 'framer-motion'
import Link from 'next/link'
import TransitionEffect from './TransitionEffect'

const poppins = Poppins({
    weight:['800'],
    subsets:['latin']
})


export default function Hero() {
  return (
    <section className='hero relative w-screen h-screen overflow-hidden'>

        <TransitionEffect />

        <motion.div 
            initial={{x:'-65vw'}}
            animate={{x:0}}
            transition={{duration:1.6, delay:0.7, ease:'easeInOut'}}
            className='w-full md:w-9/12 lg:w-7/12 xl:w-8/12'>
            <h1 className='font-extrabold text-4xl lg:text-6xl xl:text-[66px] 2xl:text-[81px] tracking-tighter text-center md:text-left' style={poppins.style}>
                Carlos <span className='title-span'>Metaute</span><br /> Frontend Developer.
            </h1>
            <p className='text-lg text-center md:text-left mt-6 lg:mt-9 tracking-tight text-slate-300'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla reprehenderit iste expedita veritatis ad culpa sequi eligendi quis sunt? Officiis nostrum numquam deleniti iusto, illo nesciunt possimus temporibus. Assumenda amet ipsam molestias, facilis natus ratione sapiente placeat?
            </p>
            <div className='flex flex-col md:flex-row items-center mt-16 md:mt-6 lg:mt-9 gap-8 lg:gap-10'>
                
                <button className='main-btn w-56'>
                    <Link href={'/contact'}>
                        Contact
                    </Link>
                </button>

                <button className=''>
                    Download CV
                </button>
                
            </div>
        </motion.div>


        <motion.img 
            initial={{y:'50vh', opacity:0}}
            animate={{y:0, opacity: 1}}
            transition={{duration:1.6, ease:'easeInOut' , delay:1}}
            className='absolute hidden lg:block top-14 w-6/12 right-1/2 translate-x-1/2 lg:translate-x-0 lg:top-auto lg:bottom-0 lg:right-20 xl:right-40 2xl:right-64 lg:w-[29%] z-20' src="https://i.imgur.com/OTdKfwe.png" alt="" />
        
        <img src="https://i.imgur.com/mKNPStx.png" className='hidden lg:block absolute -z-10 mix-blend-color-dodge right-0 bottom-0 w-[145%]' alt="" />

        <img src="https://i.imgur.com/Mw1p9T4.png" className='block lg:hidden absolute -z-10 mix-blend-color-dodge right-0 bottom-0' alt="" />

    </section>
  )
}
