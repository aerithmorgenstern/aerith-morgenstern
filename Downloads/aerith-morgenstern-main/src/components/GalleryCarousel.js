import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './GalleryCarousel.css';

const GalleryCarousel = () => {
  return (
    <div class='gallerything'>
      <h1 ><br/>Gallery</h1>
    <div className="swiper-container-wrapper">
      <Swiper className="mySwiper" navigation modules={[Navigation]}>
        <SwiperSlide>
          <img src={require('./images/destiny.png')} alt="Destiny 1" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('./images/old destiny/destiny2 copy.png')} alt="Destiny 1" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('./images/old destiny/destiny copy.png')} alt="Destiny 1" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('./images/old destiny/TDIHIE copy.png')} alt="Destiny 1" />
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
      <Swiper className="mySwiper" navigation modules={[Navigation]}>
        <SwiperSlide>
          <img src={require('./images/secrets.png')} alt="Destiny 4" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('./images/old secrets/secrets2 copy.png')} alt="Destiny 1" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('./images/old secrets/secrets copy.png')} alt="Destiny 1" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('./images/old secrets/OTS copy.png')} alt="Destiny 1" />
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
      <Swiper className="mySwiper" navigation modules={[Navigation]}>
        <SwiperSlide>
          <img src={require('./images/falling.png')} alt="Destiny 7" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('./images/old falling/falling2 copy.png')} alt="Destiny 1" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('./images/old falling/falling copy.png')} alt="Destiny 1" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={require('./images/old falling/OFAS copy.png')} alt="Destiny 1" />
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>
    </div>
    </div>
  );
};

export default GalleryCarousel;
