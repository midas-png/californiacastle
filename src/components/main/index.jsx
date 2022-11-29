import { Hero } from './hero';
import { Booker } from './booker';
import { TitleComponent as Title } from './styles';
import { Info } from './info';
import { Social } from './social';
import { Icons } from 'assets';
import { Location } from 'components';

const LOCATIONS_AVALIABLE = [
  {
    id: 1,
    category: 'Shared room, 4 beds',
    title: (
      <Title secondaryFont>
        <b>Cozy housing</b> in Los Angeles
      </Title>
    ),
    price: 600,
    description: `Lorem ipsum dolor sit amet,
      consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna
      ali lorem ipsum dolor.`,
    images: [
      Icons.MockHouse1,
      Icons.MockHouse2,
      Icons.MockHouse3,
      Icons.MockHouse4,
    ],
  },
  {
    id: 2,
    reverse: true,
    category: 'Shared room, 2 beds',
    title: (
      <Title secondaryFont>
        <b>Cozy housing</b> in Miami
      </Title>
    ),
    description: `Lorem ipsum dolor sit amet,
      consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna
      ali lorem ipsum dolor.`,
    price: 750,
    images: [
      Icons.MockHouse1,
      Icons.MockHouse2,
      Icons.MockHouse3,
      Icons.MockHouse4,
    ],
  },
  {
    id: 3,
    category: 'Shared room, 4 beds',
    title: (
      <Title secondaryFont>
        <b>Cozy housing</b> in Miami
      </Title>
    ),
    description: `Lorem ipsum dolor sit amet,
      consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna
      ali lorem ipsum dolor.`,
    price: 700,
    images: [
      Icons.MockHouse1,
      Icons.MockHouse2,
      Icons.MockHouse3,
      Icons.MockHouse4,
    ],
  },
  {
    id: 4,
    reverse: true,
    category: 'Shared room, 2 beds',
    title: (
      <Title secondaryFont>
        <b>Cozy housing</b> in Miami
      </Title>
    ),
    description: `Lorem ipsum dolor sit amet,
      consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna
      ali lorem ipsum dolor.`,
    price: 900,
    images: [
      Icons.MockHouse1,
      Icons.MockHouse2,
      Icons.MockHouse3,
      Icons.MockHouse4,
    ],
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
          id={location.id}
          reverse={location.reverse}
          category={location.category}
          title={location.title}
          price={location.price}
          description={location.description}
          images={location.images}
        />
      ))}
      <Info />
      <Social />
    </>
  );
};
