"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import TransitionEffect from '../components/TransitionEffect'
import {MdEmail} from 'react-icons/md'
import {AiFillPhone} from 'react-icons/ai'
import {MdLocationPin} from 'react-icons/md'
import {FaCss3Alt} from 'react-icons/fa'

export default function Page() {

    const [activeSection, setActiveSection] = useState( 'skills' )

  return (
    <section className='w-screen h-screen relative flex items-center flex-col lg:flex-row lg:justify-center pt-12 md:pt-8 lg:pt-0'>
        <TransitionEffect />
        <img
          
          src="https://i.imgur.com/Mw1p9T4.png" className='absolute mix-blend-color-dodge right-0 bottom-0 md:w-7/12 -z-10' alt="explosion" />
        <motion.img
          initial={{x:'-120%', opacity:0}}
          animate={{x:'-50%', opacity: 1, transition:{duration:1.2, ease:'easeInOut', delay:0.7}}}
          className='w-[350px] 2xl:w-[500px] hidden lg:block absolute -z-10 left-0 bottom-0' src="https://i.imgur.com/OTdKfwe.png" alt="" />
        <div className='flex flex-col lg:flex-row justify-center gap-6 lg:gap-0 w-full'>
            <div className='w-full lg:w-5/12'>
                <h3 className='text-4xl lg:text-5xl 2xl:text-6xl font-extrabold tracking-tighter text-center md:text-left items-center lg:items-start'>Let's Bring <span className='text-[#FB1F65]'>
                Your Website</span> To Digital Life.</h3>
                <p className='text-lg text-slate-300 mt-4'>Bringing your website to life in the digital realm is my specialty. With an unwavering passion for innovation and creativity, i'm ready to elevate your online presence to new heights.</p>
            </div>

            <div className='w-full lg:w-5/12 lg:pl-6'>
                <div className='flex items-center gap-20 md:gap-32'>
                  <p onClick={()=> setActiveSection('skills')} className='text-2xl text-slate-200 font-semibold underline underline-offset-4 cursor-pointer'>Skills</p>
                  <p onClick={()=> setActiveSection('info')} className='text-2xl text-slate-400 font-semibold underline underline-offset-4 cursor-pointer'>Info</p>
                  
                </div>

                {activeSection === 'skills' ?
                  <div className='flex flex-col items-center lg:items-start'>
                  <div className='flex mt-6 lg:mt-9 flex-col lg:flex-row gap-2'>
                    <p className='text-slate-300 mt-2 text-center lg:text-left'>Web development</p>
                    <div className='flex items-center gap-1'>
                      <div className='about-icon'>
                        <img className='w-9' src="/css-3-svgrepo-com.svg" alt="css icon" />
                        <p className='text-center text-slate-200'>css</p>
                      </div>     
                      <div className='about-icon'>
                        <img className='w-9' src="/tailwind-svgrepo-com.svg" alt="css icon" />
                        <p className='text-center text-slate-200'>css</p>
                      </div>                
                      <div className='about-icon'>
                        <img className='w-9 react-icon' src="/react-svgrepo-com.svg" alt="react icon" />
                        <p className='text-center text-slate-200'>react</p>
                      </div>
                      <div className='about-icon'>
                        <img className='w-9' src="/next-js-svgrepo-com.svg" alt="next icon" />
                        <p className='text-center text-slate-200'>next js</p>
                      </div>
                      <div className='about-icon'>
                        <img className='w-9' src="/javascript-svgrepo-com.svg" alt="js icon" />
                        <p className='text-center text-slate-200'>javascript</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className='flex mt-2  flex-col lg:flex-row lg:gap-2' >
                    <p className='lg:mt-2 text-center lg:text-left text-slate-300'>Design</p>
                    <div className='about-icon'>
                          <img className='w-9 mx-auto' src="/figma-svgrepo-com.svg" alt="js icon" />
                          <p className='text-center text-slate-200'>figma</p>
                    </div>
                  </div>
                  
                  <div className='flex flex-col lg:flex-row lg:gap-3 mt-2'>
                    <p className='text-slate-300'>English</p>
                    <p className='text-center lg:text-left'>B2</p>
                  </div>
                  </div>    
                  : 
                  <div>
                    <div className='flex gap-2 items-center my-7'>
                      <MdEmail size={27} />
                      <p>carlosmet9409@gmail.com</p>
                    </div>
                    <div className='flex gap-2 items-center my-7'>
                      <AiFillPhone size={27} />
                      <p>+57 300 616 1316</p>
                    </div>
                    <div className='flex gap-2 items-center my-7'>
                      <MdLocationPin size={27} />
                      <p>Medellín, Colombia</p>
                    </div>
                  </div>            
                }
                
                

            </div>
        </div>
    </section>
  )
}
