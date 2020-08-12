import React from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'

import { withRouter } from 'react-router-dom'

const Home = props => {
  console.log('home')
  const handleClick = () => {
    axios.get('/api/posts')
      .then(data => {
        console.log('######################')
        console.log(data)

        props.history.push('/login')
      })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        home
      </div>

      <Button
        onClick={handleClick}
        variant="contained"
        color="primary"
      >
        Hello World
      </Button>
    </ Container>
  )
}

export default withRouter(Home)
