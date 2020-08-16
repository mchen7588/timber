import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import UnAuthHeader from './shared/UnAuthHeader'
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Home from "./containers/Home";

const UnAuthApp = () => {
  return (
    <>
      <UnAuthHeader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </>
  )
}

export default UnAuthApp
