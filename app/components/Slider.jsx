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
    image: 'https://i.imgur.com/kWLX6iw.png',
    title: '1st project',
    id:1,
    from: '#a855f7',
    to: '#e9d5ff'
},
{
    src: '',
    image: 'https://i.imgur.com/kWLX6iw.png',
    title: '2nd one',
    id: 2,
    from: '#ffc3a0',
    to: '#ffafbd'
},
{
    src: '',
    image: 'https://i.imgur.com/kWLX6iw.png',
    title: '2nd one',
    id: 3,
    from :'#2193b0',
    to: '#6dd5ed'
},
{
    src: '',
    image: 'https://i.imgur.com/kWLX6iw.png',
    title: '2nd one',
    id: 4,
    from :'#02aab0',
    to: '#00cdac'
},
{
    src: '',
    image: 'https://i.imgur.com/07KMWab.jpg',
    title: '2nd one',
    id: 5
},
{
    src: '',
    image: 'https://i.imgur.com/aHiQV2C.jpg',
    title: '2nd one',
    id: 6
},
{
    src: '',
    image: 'https://i.imgur.com/aHiQV2C.jpg',
    title: '2nd one',
    id: 4
}

]  

const Slider = ({children}) => {
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

        {projects.map( (project, index) =>(
            <SwiperSlide key={index}>
                <div className='w-full h-64 md:h-80 overflow-hidden flex flex-col items-center relative bg-gradient-to-r from-pink-400 to-pink-100 rounded-xl'>
                    <h4 className='absolute top-6 left-3 font-extrabold text-4xl text-white z-10'>{project.title}</h4>  

                    <img src={project.image} className='w-full md:w-11/12 -rotate-[30deg]' alt="" />
                    
                </div>
            </SwiperSlide>
        ) )}
      <SwiperSlide>{children}</SwiperSlide>           
    </Swiper>
    </div>
  );
};

export default Slider