/* eslint-disable import/no-unresolved */
import { SwiperSlide } from 'swiper/react';
import { SwiperComponent as Swiper, SwiperImage } from './styles';
import 'swiper/css';

export const SwiperComponent = (props) => (
  <Swiper {...props}>
    {props.images.map((image, index) => (
      <SwiperSlide key={index}>
        <SwiperImage src={image}></SwiperImage>
      </SwiperSlide>
    ))}
  </Swiper>
);
