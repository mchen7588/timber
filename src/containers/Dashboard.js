import React from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'

import { withRouter } from 'react-router-dom'

const Dashboard = props => {
  console.log('Dashboard')

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        Dashboard
      </div>
    </ Container>
  )
}

export default withRouter(Dashboard)
