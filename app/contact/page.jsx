"use client"
import React, {useRef, useState} from 'react'
import TransitionEffect from '../components/TransitionEffect'
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';

export default function Page() {

    const [errorMessage, setErrorMessage] = useState(null)
    const [nameColor, setNameColor] =useState('bg-white/5 focus:outline-none border border-slate-400 rounded-lg w-full px-2 lg:px-4 py-3 md:py-1 lg:py-3')
    const [mailColor, setMailColor] =useState('bg-white/5 focus:outline-none border border-slate-400 rounded-lg w-full px-2 lg:px-4 py-3 md:py-1 lg:py-3')
    const ref = useRef()

    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    const sendEmail = (e) => {
        e.preventDefault();
        console.log(ref.current.mail.value)
        if(!regexEmail.test(ref.current.mail.value)){  
            setErrorMessage('insert a valid mail direction please')    
            setMailColor('bg-white/5 focus:outline-none border border-red-500 rounded-lg w-full px-2 lg:px-4 py-3 md:py-1 lg:py-3')      
            return
        }
        if(ref.current.name.value === ''){
            setErrorMessage('insert a valid name please')
            setNameColor('bg-white/5 focus:outline-none border border-red-500 rounded-lg w-full px-2 lg:px-4 py-3 md:py-1 lg:py-3')
            return
        }
        
        emailjs.sendForm('service_7ahixdt', 'template_hkx5fx6', ref.current, 'rRvVb2_HbgNg3wp9z')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          confetti()

          setMailColor('bg-white/5 focus:outline-none border border-slate-400 rounded-lg w-full px-2 lg:px-4 py-3 md:py-1 lg:py-3')
          setNameColor('bg-white/5 focus:outline-none border border-slate-400 rounded-lg w-full px-2 lg:px-4 py-3 md:py-1 lg:py-3')
          setErrorMessage('')
        
      };

  return (
    <section className='w-screen h-screen flex flex-col lg:flex-row items-center gap-10 md:gap-5 lg:gap-0 pt-24 md:pt-5 lg:pt-0 lg:justify-between'>
        <TransitionEffect />
        <img src="https://i.imgur.com/Mw1p9T4.png" className='absolute mix-blend-color-dodge right-0 bottom-0 md:w-7/12 -z-10' alt="explosion" />
        <div className='w-full lg:w-5/12'>
            <h3 className='text-center lg:text-left font-extrabold text-4xl lg:text-5xl 2xl:text-6xl tracking-tighter'>Let's get in <span className='text-[#FB1F65]'>touch.</span></h3>
            <p className='text-slate-400 text-lg tracking-tight'></p>
        </div>

        <form onSubmit={sendEmail} ref={ref} className='w-full lg:w-6/12' action="">
            <div className='flex w-full items-center justify-between'>
                <div className='w-[48%]'>
                    <label className='text-slate-400' htmlFor="">Name</label><br />
                    <input name='name' type="text" className={nameColor} />
                </div>
                <div className='w-[48%]'>
                    <label className='text-slate-400' htmlFor="">Lastname</label><br />
                    <input name='lastname' type="text" className='bg-white/5 focus:outline-none border border-slate-400 rounded-lg w-full px-2 lg:px-4 py-3 md:py-1 lg:py-3' />
                </div>
                
            </div>

            <div className='mt-2'>
                <label className='text-slate-400' htmlFor="">E-mail</label><br />
                <input name='mail' type="email" className={mailColor} />
            </div>

            <div className='mt-3 md:mt-2 lg:mt-3'>
                <label className='text-slate-400' htmlFor="">Message</label><br />
                <input name='message' type="text" className='bg-white/5 focus:outline-none border border-slate-400 rounded-lg w-full px-2 lg:px-4 py-2 h-24 md:h-[72px] lg:h-28' />
            </div>
            
            <div className='h-4'>
            {
                errorMessage &&
                    <p className='text-sm text-red-500 tracking-tight font-semibold'>{errorMessage}</p>
            }
            </div>

            <button className='bg-transparent border-2 border-[#FB1F65] mt-4 md:mt-2 lg:mt-6 w-44 mx-auto block py-2 md:py-1 lg:py-2 xl:py-3 rounded-3xl text-slate-300 font-bold text-xl' type="submit">
                Send
            </button>
            

        </form>

    </section>
  )
}
