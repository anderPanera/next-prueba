import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

export default function Producto({ imgs }) {
  return ( <>
        <Swiper
        spaceBetween={500}
        slidesPerView={1}
        >
            
        {imgs.map((img) => (
            <SwiperSlide key={img}>
                <img src={img} alt={img}/>
            </SwiperSlide>
        ))}
        
        </Swiper>
    </>
  );
};