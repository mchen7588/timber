import React from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import { connect } from "react-redux";

import { withRouter } from 'react-router-dom'

const TreeList = props => {
  console.log('TreeList')

  const renderTreeList = () => {
    return props.trees.map(tree => {
      return (
        <div
          key={tree.tree_id}
        >
          {tree.tree_id}
        </div>
      )
    })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        TreeList
      </div>

      { renderTreeList() }
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    trees: state.treeReducer.treeList
  }
}

// const mapDispatchToProps = dispatch => {
//
// }

export default connect(
  mapStateToProps,
  null,
)(TreeList)
