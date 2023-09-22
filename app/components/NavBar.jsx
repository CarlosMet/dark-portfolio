"use client"
import React, { useState } from 'react'
import {BiHomeAlt2, BiSolidFolderOpen} from 'react-icons/bi'
import {RiContactsLine} from 'react-icons/ri'
import {BsFillSendExclamationFill} from 'react-icons/bs'
import {GiStrong} from 'react-icons/gi'
import Link from 'next/link'


export default function NavBar() {
    const [activeSection, setActiveSection] = useState(2)

    const setActive = (section)=>{
        setActiveSection(section)
    }

    const active = 'w-[36%] flex md:block items-center text-black font-bold gap-2 md:gap-0 bg-pink-400 md:bg-transparent md:text-white justify-center py-4 px-2 rounded-[32px] md:w-auto transition-all duration-700 ease-in-out z-50 md:transition-none md:border-b-4 md:border-pink-400 md:rounded-none'

    const inactive = 'w-[16%] md:w-auto flex justify-center md:w-auto bg-transparent cursor-pointer'

  return (
    <header className='w-full bg-black/50 md:bg-white/10 fixed bottom-0 left-0 px-7 rounded-xl py-4 md:w-20 md:rounded-full md:gap-5 md:top-1/2 md:-translate-y-1/2  md:left-auto md:right-1 lg:right-3 md:h-80 lg:h-[520px] md:py-12 z-50'>
        <nav className='flex md:h-full items-center justify-between flex-row md:flex-col h-20 z-50'>
            
            
            <Link href={'/portfolio'} onClick={()=> setActive(0)} className={ activeSection === 0 ? active : inactive }>
                <BiSolidFolderOpen size={31}></BiSolidFolderOpen>
                <p className={activeSection === 0 ? 'text-xl md:hidden' : 'hidden'}>Work</p>
            </Link>
           
            
            <Link href={'/contact'} onClick={()=> setActive(1)} className={ activeSection === 1 ? active : inactive }>
                <BsFillSendExclamationFill size={31}></BsFillSendExclamationFill>
                <p className={activeSection === 1 ? 'text-xl md:hidden' : 'hidden'}>Contact</p>
            </Link>

            <Link href={'/'} onClick={()=> setActive(2)} className={ activeSection === 2 ? active : inactive }>
                <BiHomeAlt2 size={31}></BiHomeAlt2>
                <p className={activeSection === 2 ? 'text-xl md:hidden' : 'hidden'}>Home</p>
            </Link>

            <Link href={'/testimonials'} onClick={()=> setActive(3)} className={ activeSection === 3 ? active : inactive }>
                <GiStrong size={31}></GiStrong>
                <p className={activeSection === 3 ? 'text-xl md:hidden' : 'hidden'}>Skills</p>
            </Link>

            <Link href={'/about'} onClick={()=> setActive(4)} className={ activeSection === 4 ? active : inactive }>
                <RiContactsLine size={31}></RiContactsLine>
                <p className={activeSection === 4 ? 'text-xl md:hidden' : 'hidden'}>About</p>
            </Link>

        </nav>
    </header>
  )
}
