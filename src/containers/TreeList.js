import React from 'react'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Link from '@material-ui/core/Link'
import { connect } from "react-redux";

import { getTreeDetail } from '../store/actions/treeDetail'

const TreeList = props => {
  console.log('TreeList')

  const handleClick = selectedTree => {
    return () => {
      console.log('click')
      props.getTreeDetail(selectedTree)
    }
  }

  const renderTreeList = () => {
    return props.trees.map(tree => {
      return (
        <div
          key={tree.tree_id}
          onClick={handleClick(tree)}
        >
          <Link variant="button" color="textPrimary" >
            {tree.tree_id}
          </Link>
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

const mapDispatchToProps = dispatch => {
  return {
    getTreeDetail: selectedTree => dispatch(getTreeDetail(selectedTree))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TreeList)
