import React from "react";

import SingleRoom from "./pages/SingleRoom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import ErrorPage from "./pages/ErrorPage";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/rooms/:slug" component={SingleRoom} />
      <Route exact path="/rooms/" component={Rooms} />
      <Route exact path="/" component={Home} />
      <Route component={ErrorPage} />
    </Switch>
  );
}

export default App;
