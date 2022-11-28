/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { Navigation, EffectFade, Autoplay } from 'swiper';
import { Swiper } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css';

export const SwiperComponent = styled(Swiper).attrs(() => ({
  modules: [Navigation, EffectFade, Autoplay],
  navigation: true,
  loop: true,
  effect: 'fade',
}))`
  height: 100%;

  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.colors.secondary};
    transform: scale(1.3);
  }
`;

export const SwiperImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
