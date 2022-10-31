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

export const Hero = () => (
  <HeroWrapper>
    <HeroImage src={Icons.IconMainHouse} />
    <ContentWrapper>
      <ContentTitle variant='h1' color='#fff' secondaryFont>
        <BoldText>California</BoldText> Castle
      </ContentTitle>
      <DescriptionContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </DescriptionContent>
      <ContentButton>Book now</ContentButton>
    </ContentWrapper>
  </HeroWrapper>
);
