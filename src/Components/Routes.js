import { Route, Switch } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import Feed from "../Routes/Feed";
import Auth from "../Routes/Auth";
import Explore from "../Routes/Explore";
import Search from "../Routes/Search";
import Profile from "../Routes/Profile";

const LoggedInRoute = () => (
  <Switch>
    <Route exact path="/" component={Feed} />
    <Route path="/explore" component={Explore} />
    <Route path="/search" component={Search} />
    <Route path="/:username" component={Profile} /> 
  </Switch>
);

const LoggedOutRoute = () => (
  <Switch>
    <Route exact path="/" component={Auth} />
  </Switch>
);


const AppRouter = ({ isLoggedIn }) => (
  isLoggedIn ? <LoggedInRoute /> : <LoggedOutRoute />
);

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;
