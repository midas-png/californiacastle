import {
  DetailsWrapper,
  SwiperWrapper,
  InfoWrapper,
  SectionWrapper,
  SectionDescription,
  SectionPointsWrapper,
  SectionPoint,
  PriceWrapper,
  Price,
} from './styles';
import { Swiper, Title } from 'ui';
import { Icons } from 'assets';

const AMENITIES = [
  'Air Conditioner',
  'LCD Television',
  'Parking',
  'Pure Air',
  'Garage Space',
  'Minibar',
  'Pet Friendly',
  'Safe Deposit Box',
  'Hair Dryer',
  'No Smoking',
  'Pets Allowed',
  'Safety Box',
];

const images = [
  Icons.MockHouse1,
  Icons.MockHouse2,
  Icons.MockHouse3,
  Icons.MockHouse4,
];

export const Details = ({ price, description }) => {
  return (
    <DetailsWrapper>
      <SwiperWrapper>
        <Swiper
          autoplay={{
            delay: 2500,
          }}
          images={images}
        />
      </SwiperWrapper>
      <InfoWrapper>
        <PriceWrapper>
          <Price>{price}$ / Month</Price>
        </PriceWrapper>
        <SectionWrapper>
          <Title variant='h2' secondaryFont>
            Room details
          </Title>
          <SectionDescription>{description}</SectionDescription>
        </SectionWrapper>
        <SectionWrapper>
          <Title variant='h2' secondaryFont>
            Amenities
          </Title>
          <SectionPointsWrapper>
            {AMENITIES.map((amenity, index) => (
              <SectionDescription key={index}>
                <SectionPoint>&#x2022;</SectionPoint>
                {amenity}
              </SectionDescription>
            ))}
          </SectionPointsWrapper>
        </SectionWrapper>
        <SectionWrapper>
          <Title variant='h2' secondaryFont>
            Location
          </Title>
          <SectionDescription>
            1635 E 33rd St, Los Angeles, CA 90011
          </SectionDescription>
        </SectionWrapper>
      </InfoWrapper>
    </DetailsWrapper>
  );
};
