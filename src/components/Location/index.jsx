import { Link } from 'react-router-dom';
import {
  LocationWrapper,
  ContentWrapper,
  ContentCategory,
  ContentDescription,
  TitleWrapper,
  Right,
} from './styles';
import { Button } from 'ui';

export const Location = ({ reverse, category, title, description }) => {
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
      <Right />
    </LocationWrapper>
  );
};
