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

export const Details = ({
  price,
  description,
  amenities,
  location,
  images,
}) => {
  images = images?.map(
    (image) => 'https://californiacastleapi.onrender.com/' + image,
  );

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
            {amenities?.map((amenity, index) => (
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
          <SectionDescription>{location}</SectionDescription>
        </SectionWrapper>
      </InfoWrapper>
    </DetailsWrapper>
  );
};
