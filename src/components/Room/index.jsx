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
import { Icons } from 'assets';

export const Room = () => {
  const [roomData, setRoomData] = useState();
  const { id } = useParams();

  return (
    <RoomWrapper>
      <ImageWrapper>
        <ImageHeader src={Icons.RoomHeader} />
      </ImageWrapper>
      <RoomInfoWrapper>
        <RoomDataWrapper>
          <Title secondaryFont>Cozy housing in Los Angeles</Title>
          <RoomInfo>
            <Details />
            <Reservation />
          </RoomInfo>
        </RoomDataWrapper>
      </RoomInfoWrapper>
    </RoomWrapper>
  );
};
