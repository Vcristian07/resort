import React, { Component } from "react";
import Hero from "../component/hero";
import Banner from "./../component/banner";
import { Link } from "react-router-dom";

const SingleRoom = () => {
  return (
    <Hero>
      <Banner title="Single Room">
        <Link to="/rooms" className="btn-primary">
          Go to rooms
        </Link>
      </Banner>
    </Hero>
  );
};

export default SingleRoom;
