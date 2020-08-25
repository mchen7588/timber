import * as actionTypes from '../actions/actionTypes'

const initialTreeDetailState = {
  treeDetail: {},
}

const treeDetailReducer = (state = initialTreeDetailState, action) => {
  switch (action.type) {
    case actionTypes.GET_TREE_DETAIL:
      return {
        ...state,
        treeDetail: action.data,
      }
    default:
      return state
  }
}

export default treeDetailReducer
