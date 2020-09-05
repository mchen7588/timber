import React from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Button from '@material-ui/core/Button'
import { connect } from "react-redux";

const TreeDetail = props => {
  console.log('TreeDetail')

  const handleClick = () => {
    props.history.push('/dashboard')
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        TreeDetail
      </div>
      <Button
        onClick={handleClick}
        variant="contained"
        color="primary"
      >
        claim tree
      </Button>
      <div>
        {JSON.stringify(props?.treeDetail)}
      </div>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    treeDetail: state.treeDetailReducer.treeDetail
  }
}

// const mapDispatchToProps = dispatch => {
//
// }

export default connect(
  mapStateToProps,
  null,
)(TreeDetail)
