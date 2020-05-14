import React from "react";

import SingleRoom from "./pages/singleRoom";
import Home from "./pages/home";
import Rooms from "./pages/rooms";
import ErrorPage from "./pages/errorPage";
import Navbar from "./components/navbar";

import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/" component={Home} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
}

export default App;
