import axios from "axios"
import * as actionTypes from "./actionTypes"

export const getTreesByName = (dispatch) => {
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
            data: res.data
          }
        )
      })
      .catch(err => {
        console.log('get trees error', err)
      })
  }
}
