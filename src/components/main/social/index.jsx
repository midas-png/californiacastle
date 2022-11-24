import {
  SocialWrapper,
  ContentWrapper,
  SwiperWrapper,
  TitleComponent as Title,
  ProgramsWrapper,
  ProgramLogo,
} from './styles';
import { Swiper } from 'ui';
import { Icons } from 'assets';

const PROGRAMS_LOGO = [
  Icons.Dpss,
  Icons.Path,
  Icons.Dwc,
  Icons.Pasadena,
  Icons.Lalc,
  Icons.Tpc,
  Icons.Lam,
  Icons.Vala,
];

const SWIPER_IMAGES = [
  Icons.MockHouse1,
  Icons.MockHouse2,
  Icons.MockHouse3,
  Icons.MockHouse4,
];

export const Social = () => (
  <SocialWrapper>
    <ContentWrapper>
      <Title variant='h2' secondaryFont>
        <b>We accept</b> these social programs
      </Title>
      <ProgramsWrapper>
        {PROGRAMS_LOGO.map((logo) => (
          <ProgramLogo src={logo} />
        ))}
      </ProgramsWrapper>
    </ContentWrapper>
    <SwiperWrapper>
      <Swiper images={SWIPER_IMAGES} />
    </SwiperWrapper>
  </SocialWrapper>
);
