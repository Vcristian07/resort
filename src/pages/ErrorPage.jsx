import React, { Component } from "react";
import Hero from "./../component/hero";
import Banner from "./../component/banner";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <Hero>
      <Banner title="404" subtitle="Page not found">
        <Link to="/" className="btn-primary">
          Go to home
        </Link>
      </Banner>
    </Hero>
  );
};

export default ErrorPage;
