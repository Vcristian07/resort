import React, { Component } from "react";
import Hero from "../components/hero";
import Banner from "../components/banner";
import { Link } from "react-router-dom";
import Services from "../components/services";
import FeaturedRooms from "../components/featuredRooms";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <Hero hero="defaultHero">
          <Banner title="Home Page" subtitle="">
            <Link className="btn-primary" to="/rooms">
              Go to Rooms
            </Link>
          </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
      </>
    );
  }
}

export default Home;
