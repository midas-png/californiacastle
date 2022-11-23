import { Link } from 'react-router-dom';
import {
  LocationWrapper,
  ContentWrapper,
  ContentCategory,
  ContentDescription,
  TitleWrapper,
  SwiperWrapper,
} from './styles';
import { Button, Swiper } from 'ui';

export const Location = ({ reverse, category, title, description, images }) => {
  return (
    <LocationWrapper reverse={reverse}>
      <ContentWrapper>
        {category && <ContentCategory>{category}</ContentCategory>}
        {title && <TitleWrapper>{title}</TitleWrapper>}
        {description && <ContentDescription>{description}</ContentDescription>}
        <Link to='/booking'>
          <Button>Book now</Button>
        </Link>
      </ContentWrapper>
      <SwiperWrapper>
        <Swiper images={images} />
      </SwiperWrapper>
    </LocationWrapper>
  );
};
