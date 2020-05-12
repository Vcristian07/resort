import React, { Component } from "react";

import Hero from "./../component/hero";
import Banner from "./../component/banner";

import { Link } from "react-router-dom";

class Rooms extends Component {
  state = {};
  render() {
    return (
      <Hero hero="roomsHero">
        <Banner title="Luxurious Rooms" subtitle="Deluxe rooms">
          <Link to="/" className="btn-primary">
            go to home
          </Link>
        </Banner>
      </Hero>
    );
  }
}

export default Rooms;
