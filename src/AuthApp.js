import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import AuthHeader from './shared/AuthHeader'
import Login from './containers/Login'
import Signup from './containers/Signup'
import Home from './containers/Home'
import Dashboard from './containers/Dashboard'
import TreeList from './containers/TreeList'

const AuthApp = () => {
  return (
    <>
      <AuthHeader />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/tree-list' component={TreeList} />
      </Switch>
    </>
  )
}

export default AuthApp
