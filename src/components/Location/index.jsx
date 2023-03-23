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
  TitleComponent as Title,
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
  images = images?.map(
    (image) =>
      'https://app-a68dd003-3669-4133-8619-984a58c91d85.cleverapps.io/' + image,
  );

  return (
    <LocationWrapper id={`location${id}`} reverse={reverse}>
      <ContentWrapper>
        {category && <ContentCategory>{category}</ContentCategory>}
        {title && (
          <TitleWrapper>
            <Title secondaryFont>
              <b>{title}</b>
            </Title>
          </TitleWrapper>
        )}
        {description && (
          <ContentDescription>
            {description.length > 200
              ? `${description.slice(0, 200)}...`
              : description}
          </ContentDescription>
        )}
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
