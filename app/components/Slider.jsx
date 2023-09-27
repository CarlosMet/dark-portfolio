"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const projects = [{
    src: 'https://uniformstore.vercel.app/',
    image: 'https://i.imgur.com/mbyZsby.png',
    title: 'Uniform Store',    
    attributes: ['E-commerce'],  
    tag: 'Freelance'  
    
},
{
    src: 'https://adelaida.vercel.app/',
    image: 'https://i.imgur.com/85ElWO0.png',
    title: 'Adelaida Correa',    
    attributes: [''],
    tag:'Working On'
    
},
{
    src: 'https://carlosmet.github.io/filmscope/',
    image: 'https://i.imgur.com/X6Csmvu.png',
    title: 'Filmscope', 
    tag:'Personal'    
}

]  

const testimonials = [{
    title: 'Omaira Hoyos',
    paragraph: 'Estoy encantado de compartir mi experiencia con el trabajo que realizó nuestro desarrollador. En nuestra institución educativa, la apariencia y funcionalidad de nuestro sitio web es crucial para proporcionar información efectiva a nuestros estudiantes, padres y personal.',
    rol: 'Rectora / Principal'
},
{
    title: 'Lorena Pulgarin',
    paragraph: 'Trabajar con Carlos fue un verdadero placer. Como emprendedora, sabía que la primera impresión de nuestro sitio web era esencial para atraer a nuestros clientes potenciales.',
    rol: 'Emprendora / Business owner'
}

]

const Slider = ({section}) => {
  return (
    <div className='w-full'>
        <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={25}
      slidesPerView={1} 
      navigation    
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }} 
    >

        { section === 'portfolio' ?
        projects.map( (project, index) =>(
            <SwiperSlide key={index}>
                <div className='w-full h-64 md:h-80 2xl:h-96 overflow-hidden flex flex-col items-center relative bg-gradient-to-r from-[#FB1F65] to-pink-400 rounded-xl group'>
                    

                    <div className="absolute top-1/2 left-1/2 z-50 cursor-pointer font-extrabold tracking-tighter text-2xl lg:opacity-0 lg:group-hover:opacity-100 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700">
                            <a className='underline underline-offset-4 bg-black/40 p-2 backdrop-blur-lg rounded-lg' href={project.src} target='_blank'>Preview.</a>
                    </div>

                    <div className='absolute -right-10 w-48 top-10 h-8 rotate-45 bg-gradient-to-r from-green-500 to-green-100 grid place-items-center font-black text-xl text-black'>
                        <p>{project.tag}</p>
                    </div>

                    <img src={project.image} className='w-full h-full' alt="" />
                    
                </div>
            </SwiperSlide>
        ) )
        : testimonials.map((testimonial, index) =>(
            <SwiperSlide key={index}>
                <div className='w-11/12 md:w-9/12 lg:w-full mx-auto lg:mx-0 bg-white/5 backdrop-blur-sm pt-3 pb-10 md:pb-3 lg:pt-8 lg:pb-14 px-7 lg:px-14 rounded-2xl'>
                    <div className='flex flex-col items-center gap-2 justify-center'>

                        <div className='bg-white w-12 h-12 lg:h-14 lg:w-14 rounded-full grid place-items-center overflow-hidden'>
                            <img src="https://i.imgur.com/EsqcqJo.jpg" alt="avatar" />
                        </div>

                        <div className='text-center'>
                            <p className='text-[#FB1F65] font-bold text-lg'>{testimonial.title}</p>
                            <p className='text-sm'>{testimonial.rol}</p>
                        </div>

                    </div>
                    <p className='mt-4 lg:mt-6 text-slate-400 tracking-tight h-48 lg:h-24'>{testimonial.paragraph}</p>
                </div>
            </SwiperSlide>
        ))
    }
                
    </Swiper>
    </div>
  );
};

export default Slider