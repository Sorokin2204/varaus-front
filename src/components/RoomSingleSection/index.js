import React from 'react';
import SearchSection from './Rcomponents/select';
import Rooms from './Rcomponents/room';
import Description from './Rcomponents/description';
import './style.css';

const RoomSingleSection = (props) => {
  return (
    <div className="room-single-page">
      <SearchSection value={props?.value} />
      <Rooms value={props?.value} />
      <Description value={props?.value} />
    </div>
  );
};

export default RoomSingleSection;
