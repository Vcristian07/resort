import React, { Component } from "react";
import Hero from "./../component/hero";
import Banner from "./../component/banner";
import { Link } from "react-router-dom";
import Services from "../component/services";

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
      </>
    );
  }
}

export default Home;
