import { Link } from 'react-router-dom';
import {
  BookingWrapper,
  BookingImageWrapper,
  ApartmentIcon,
  ImageLogo,
} from './styles';
import { Information } from './information';

export const Booking = () => (
  <BookingWrapper>
    <BookingImageWrapper>
      <Link to='/californiacastle'>
        <ImageLogo>California Castle</ImageLogo>
      </Link>
      <ApartmentIcon />
    </BookingImageWrapper>
    <Information />
  </BookingWrapper>
);
