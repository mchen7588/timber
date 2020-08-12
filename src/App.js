import React, { useEffect } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { connect } from "react-redux"
import BaseRouter from "./routes"
import AuthApp from './AuthApp'
import UnAuthApp from './UnAuthApp'

import * as actions from "./store/actions/auth"

const App = props => {
  const {
    onTryAutoSignup,
    isAuthenticated,
  } = props

  useEffect(() => {
    onTryAutoSignup()
  }, [])

  return isAuthenticated ? <AuthApp /> : <UnAuthApp />
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
