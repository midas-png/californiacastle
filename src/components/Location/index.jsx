import { Link } from 'react-router-dom';
import {
  LocationWrapper,
  ContentWrapper,
  ContentCategory,
  ContentDescription,
  TitleWrapper,
  SwiperWrapper,
  PriceWrapper,
  PricePerMonth,
} from './styles';
import { Button, Swiper } from 'ui';

export const Location = ({
  id,
  reverse,
  category,
  title,
  price,
  description,
  images,
}) => {
  return (
    <LocationWrapper reverse={reverse}>
      <ContentWrapper>
        {category && <ContentCategory>{category}</ContentCategory>}
        {title && <TitleWrapper>{title}</TitleWrapper>}
        {description && <ContentDescription>{description}</ContentDescription>}
        {price && (
          <div>
            <PriceWrapper>${price}</PriceWrapper>
            <PricePerMonth> / Month</PricePerMonth>
          </div>
        )}
        <Link to={`/room/${id}`}>
          <Button>Book now</Button>
        </Link>
      </ContentWrapper>
      <SwiperWrapper>
        <Swiper images={images} />
      </SwiperWrapper>
    </LocationWrapper>
  );
};
