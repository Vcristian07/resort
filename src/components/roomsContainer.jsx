import React from "react";
import { withRoomConsumer } from "../context";
import Loading from "./loading";
import RoomsFilter from "./roomsFilter";
import RoomsList from "./roomsList";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);