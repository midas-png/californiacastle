/* eslint-disable import/no-unresolved */
import { SwiperSlide } from 'swiper/react';
import { SwiperComponent as Swiper, SwiperImage } from './styles';
import 'swiper/css';

export const SwiperComponent = ({ images }) => (
  <Swiper>
    {images.map((image) => (
      <SwiperSlide>
        <SwiperImage src={image}></SwiperImage>
      </SwiperSlide>
    ))}
  </Swiper>
);
