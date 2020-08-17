import * as actionTypes from '../actions/actionTypes'

const initialTreeState = {
  treeList: [],
}

const reducer = (state = initialTreeState, action) => {
  switch (action.type) {
    case actionTypes.GET_TREES_BY_NAME:
      return {
        ...state,
        treeList: action.data,
      }
    default:
      return state
  }
}

export default reducer
