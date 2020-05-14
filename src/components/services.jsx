import React, { Component } from "react";

import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./title";

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info: "sdas dsadsada sdafasfas fsafsa fasf saf asdsfadfsaf",
      },
      {
        icon: <FaHiking />,
        title: "Hiking",
        info: "sdas dsadsada sdafasfas fsafsa fasf saf asdsfadfsaf",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info: "sdas dsadsada sdafasfas fsafsa fasf saf asdsfadfsaf",
      },
      {
        icon: <FaBeer />,
        title: "Free Beer",
        info: "sdas dsadsada sdafasfas fsafsa fasf saf asdsfadfsaf",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item,index)=>{
            return <article key={index}>
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          })}
        </div>
      </section>
    );
  }
}

export default Services;
