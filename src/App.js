import React, { useEffect } from "react"
import { Router } from "react-router-dom"
import { connect } from "react-redux"
import BaseRouter from "./routes"
import AuthApp from './AuthApp'
import UnAuthApp from './UnAuthApp'
import history from './history'

import * as actions from "./store/actions/auth"

const App = props => {
  const {
    onTryAutoSignup,
    isAuthenticated,
  } = props

  useEffect(() => {
    onTryAutoSignup()
  }, [])

  // return isAuthenticated ? <AuthApp /> : <UnAuthApp />
  return (
    <Router history={history}>
      { isAuthenticated ? <AuthApp /> : <UnAuthApp /> }
    </Router>
  )
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
