"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const projects = [{
    src: '',
    image: 'https://i.imgur.com/K5XhdOZ.png',
    title: 'Uniform Store',    
    attributes: ['E-commerce'],
    
},

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
                <div className='w-full h-64 md:h-80 overflow-hidden flex flex-col items-center relative bg-gradient-to-r from-[#FB1F65] to-pink-400 rounded-xl'>
                    <div className="absolute top-0 left-0 w-full h-full bg-black/10 py-4 px-6 flex flex-col justify-end">
                        <h4 className='font-extrabold text-4xl text-white z-10'>{project.title}</h4> 
                        {project.attributes.map((att, index) => (
                            <p className='font-semibold tracking-tight' key={index}>{att}</p>
                        ))}
                    </div> 

                    <img src={project.image} className='w-full h-full' alt="" />
                    
                </div>
            </SwiperSlide>
        ) )
        : testimonials.map((testimonial, index) =>(
            <SwiperSlide key={index}>
                <div className='w-11/12 md:w-10/12 lg:w-full mx-auto lg:mx-0 bg-white/5 backdrop-blur-sm pt-3 pb-10 lg:pt-8 lg:pb-14 px-7 lg:px-14 rounded-2xl'>
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