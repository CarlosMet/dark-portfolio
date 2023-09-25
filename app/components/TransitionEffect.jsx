"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function TransitionEffect() {
  return (
    <>
         <motion.div 
            className='z-50 fixed top-0 right-full h-screen bg-[#090e12]'
            initial={{width: '100%', x:'100%'}}
            animate={{width: 0, x:'0%'}}
            transition={{duration:1.3}}
            >
            
        </motion.div>

        <motion.div 
            className='z-[49] fixed top-0 right-full h-screen bg-[#FB1F65]'
            initial={{width: '100%', x:'100%'}}
            animate={{width: 0, x:'0%'}}
            transition={{duration:1.3, delay:0.2}}
            >
            
        </motion.div>

        <motion.div 
            className='z-[48] fixed top-0 right-full h-screen bg-slate-800'
            initial={{width: '100%', x:'100%'}}
            animate={{width: 0, x:'0%'}}
            transition={{duration:1.3, delay:0.4}}
            >
            
        </motion.div>
    </>
  )
}
