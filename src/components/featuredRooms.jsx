import React, { Component } from "react";
import Title from "./title";
import { RoomContext } from "../context";
import Loading from "./loading";
import Room from "./room";

class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { featuredRooms, loading } = this.context;
    console.log(featuredRooms);
    featuredRooms = featuredRooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });

    return (
      <>
        <section className="featured-rooms">
          <Title title="Featured Rooms" />;
          <div className="featured-rooms-center">
            {loading ? <Loading /> : featuredRooms}
          </div>
        </section>
      </>
    );
  }
}

export default FeaturedRooms;
