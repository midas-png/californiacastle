import { BookingWrapper, BookingImageWrapper, ApartmentIcon } from './styles';
import { Information } from './information';

export const Booking = () => (
  <BookingWrapper>
    <BookingImageWrapper>
      <ApartmentIcon />
    </BookingImageWrapper>
    <Information />
  </BookingWrapper>
);
