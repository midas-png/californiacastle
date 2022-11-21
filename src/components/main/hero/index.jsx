import { useNavigate } from 'react-router-dom';
import {
  HeroWrapper,
  HeroImage,
  ContentWrapper,
  DescriptionContent,
  BoldText,
  ContentTitle,
  ContentButton,
} from './styles';
import { Icons } from 'assets';

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <HeroWrapper>
      <HeroImage src={Icons.IconMainHouse} />
      <ContentWrapper>
        <ContentTitle variant='h1' color='#fff' secondaryFont>
          <BoldText>California</BoldText> Castle
        </ContentTitle>
        <DescriptionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </DescriptionContent>
        <ContentButton onClick={() => navigate('/booking')}>
          Book now
        </ContentButton>
      </ContentWrapper>
    </HeroWrapper>
  );
};
