import { Hero } from './hero';
import { Booker } from './booker';
import { TitleComponent as Title } from './styles';
import { Location } from 'components';

const LOCATIONS_AVALIABLE = [
  {
    category: 'Category',
    title: (
      <Title secondaryFont>
        <b>Cozy housing</b> in Los Angeles
      </Title>
    ),
    description: `Lorem ipsum dolor sit amet,
      consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna
      ali lorem ipsum dolor.`,
  },
  {
    reverse: true,
    category: 'Category',
    title: (
      <Title secondaryFont>
        <b>The Art of meeting</b> your highest expectations
      </Title>
    ),
    description: `Lorem ipsum dolor sit amet,
      consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna
      ali lorem ipsum dolor.`,
  },
  {
    category: 'Category',
    title: (
      <Title secondaryFont>
        <b>Cozy housing</b> in Detroit
      </Title>
    ),
    description: `Lorem ipsum dolor sit amet,
      consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna
      ali lorem ipsum dolor.`,
  },
];

export const Main = () => {
  return (
    <>
      <Hero />
      <Booker />
      {LOCATIONS_AVALIABLE.map((location, index) => (
        <Location
          key={index}
          reverse={location.reverse}
          category={location.category}
          title={location.title}
          description={location.description}
        />
      ))}
    </>
  );
};
