import React from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'

import { withRouter } from 'react-router-dom'

const TreeList = props => {
  console.log('TreeList')

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        TreeList
      </div>
    </Container>
  )
}

export default withRouter(TreeList)
