import axios from 'axios'
import * as actionTypes from './actionTypes'

import history from '../../history'

export const getTreeDetail = selectedTree => {
  console.log('@@@@@@@@@@@@@@@@@@')
  console.log(selectedTree)
  return dispatch => {
    axios
      .get(`/api/tree/${selectedTree.tree_id}/`)
      .then(res => {
        console.log(res)
        const treeDetail = {
          treeId: selectedTree.tree_id,
          res
        }
        dispatch(
          {
            type: actionTypes.GET_TREE_DETAIL,
            data: treeDetail,
          }
        )

        history.push('/tree-detail')
      })
      .catch(err => {
        console.log('get trees error', err)
      })
  }
}
