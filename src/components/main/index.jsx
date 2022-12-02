import { useState, useEffect } from 'react';
import { Booker } from './booker';
import { Hero } from './hero';
import { Info } from './info';
import { Social } from './social';
import { Api } from 'services';
import { Icons } from 'assets';
import { Location } from 'components';

const { location } = new Api();

const images = [
  Icons.MockHouse1,
  Icons.MockHouse2,
  Icons.MockHouse3,
  Icons.MockHouse4,
];

export const Main = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    location.locationLocationsGet((error, data, response) => {
      if (!error) {
        setLocations(response.body);
      }
    });
  }, []);

  return (
    <>
      <Hero />
      <Booker />
      {locations.map((location, index) => (
        <Location
          key={index}
          id={location.id}
          reverse={index % 2 !== 0}
          category={location.category}
          title={location.title}
          price={location.price}
          description={location.description}
          images={images}
        />
      ))}
      <Info />
      <Social />
    </>
  );
};
