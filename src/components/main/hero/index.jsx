import {
  HeroWrapper,
  HeroImage,
  ContentWrapper,
  DescriptionContent,
  BoldText,
} from './styles';
import { Button, Title } from 'ui';
import { Icons } from 'assets';

export const Hero = () => (
  <HeroWrapper>
    <HeroImage src={Icons.IconMainHouse} />
    <ContentWrapper>
      <Title variant='h1' color='#fff' secondaryFont>
        <BoldText>California</BoldText> Castle
      </Title>
      <DescriptionContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </DescriptionContent>
      <Button>Book now</Button>
    </ContentWrapper>
  </HeroWrapper>
);
