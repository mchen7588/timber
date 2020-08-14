import React, { useState } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import CssBaseline from '@material-ui/core/CssBaseline'

import { withRouter } from 'react-router-dom'

const Home = props => {
  console.log('home')

  const [treeName, setTreeName] = useState('')

  const handleClick = () => {
    axios.get('/api/trees/')
      .then(data => {
        console.log('######################')
        console.log(data)

        // props.history.push('/login')
      })
  }

  const handleInputChange = e => {
    const { value } = e.target
    setTreeName(value)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        home
      </div>

      <TextField
        name="treeName"
        type="text"
        value={treeName}
        onChange={handleInputChange}
        label="tree name here"
      />

      <Button
        onClick={handleClick}
        variant="contained"
        color="primary"
      >
        Hello World
      </Button>

      <div>
        tree name: {treeName}
      </div>
    </ Container>
  )
}

export default withRouter(Home)
