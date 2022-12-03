import { useParams } from 'react-router-dom';
import { useState, useLayoutEffect } from 'react';
import { Reservation } from './reservation';
import { Details } from './details';
import {
  RoomWrapper,
  ImageWrapper,
  TitleComponent as Title,
  RoomInfoWrapper,
  RoomInfo,
  RoomDataWrapper,
  ImageHeader,
} from './styles';
import { Api } from 'services';
import { Icons } from 'assets';

const { location } = new Api();

export const Room = () => {
  const [room, setRoom] = useState({});
  const { id } = useParams();

  useLayoutEffect(() => {
    location.locationLocationIdGet(id, (error, data, response) => {
      if (!error) {
        setRoom(response.body);
      }
    });
  }, []);

  return (
    <RoomWrapper>
      <ImageWrapper>
        <ImageHeader src={Icons.RoomHeader} />
      </ImageWrapper>
      <RoomInfoWrapper>
        <RoomDataWrapper>
          <Title secondaryFont>
            <b>{room.title}</b>
          </Title>
          <RoomInfo>
            <Details
              price={room.price}
              description={room.description}
              amenities={room.amenities}
              location={room.location}
              images={room.images}
            />
            <Reservation price={room.price} />
          </RoomInfo>
        </RoomDataWrapper>
      </RoomInfoWrapper>
    </RoomWrapper>
  );
};
