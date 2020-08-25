import React from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { connect } from "react-redux";

const TreeDetail = props => {
  console.log('TreeDetail')

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        TreeDetail
      </div>
      {JSON.stringify(props?.treeDetail)}
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
