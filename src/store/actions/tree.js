import axios from 'axios'
import * as actionTypes from './actionTypes'

import history from '../../history'

export const getTreesByName = () => {
  console.log('!!!!!!!!!!!!!!!')

  return dispatch => {
    axios
      .get('/api/trees/')
      .then(res => {
        console.log('@@@@@@@@@@@@@@@@@@')
        console.log(res)
        dispatch(
          {
            type: actionTypes.GET_TREES_BY_NAME,
            data: res.data,
          }
        )

        history.push('/tree-list')
      })
      .catch(err => {
        console.log('get trees error', err)
      })
  }
}
