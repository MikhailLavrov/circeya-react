import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import Swiper from 'swiper';
import Title from './Title';

register();

// Оставил параметры локально, птмчто используются единожды
const swiperParams = {
  slidesPerView: 1,
  centeredSlides: false,
  mousewheel:  true,
  forceToAxis:  true,
  releaseOnEdges:  true,
  speed: 500,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1.5,
    },
    640: {
      slidesPerView: 2.5,
    },
    1024: {
      slidesPerView: 4.5,
    },
  },
};

export const SwiperSlider = ({sliderContent}) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    new Swiper(swiperRef.current, swiperParams);
  }, []);

  return (
    <>
      <Title headerLevel={2} children={'Lorem ipsum dolor sit amet'} />
      <swiper-container ref={swiperRef}>
        {
          sliderContent.slides.map(slide => 
            <swiper-slide key={slide.id}>
              <img src={slide.image} alt="slide" />
            </swiper-slide>
          )
        }
      </swiper-container>
    </>
  );
};

export default SwiperSlider;
