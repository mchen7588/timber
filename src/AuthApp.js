import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AuthHeader from './shared/AuthHeader'
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Home from "./containers/Home";
import Dashboard from "./containers/dashboard";

const AuthApp = () => {
  return (
    <BrowserRouter>
      <AuthHeader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}

export default AuthApp