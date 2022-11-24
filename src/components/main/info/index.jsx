import {
  BenefitsWrapper,
  InfoWrapper,
  ContentWrapper,
  ImageWrapper,
  TitleComponent as Title,
  InfoImage,
} from './styles';
import { Benefit } from './benefit';
import { Icons } from 'assets';

const BENEFITS = [
  {
    title: 'Benefit 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  },
  {
    title: 'Benefit 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  },
  {
    title: 'Benefit 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  },
  {
    title: 'Benefit 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
  },
];

export const Info = () => (
  <InfoWrapper>
    <ImageWrapper>
      <InfoImage src={Icons.BenefitsHouse} />
    </ImageWrapper>
    <ContentWrapper>
      <Title secondaryFont>
        <b>Lorem ipsum dolor sit amet, </b>consectetur adipisicing elit
      </Title>
      <BenefitsWrapper>
        {BENEFITS.map(({ title, description }) => (
          <Benefit title={title} description={description} />
        ))}
      </BenefitsWrapper>
    </ContentWrapper>
  </InfoWrapper>
);
