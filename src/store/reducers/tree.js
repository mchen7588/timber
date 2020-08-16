import * as actionTypes from '../actions/actionTypes'

const initialTreeState = {
  treesByName: [],
}

const reducer = (state = initialTreeState, action) => {
  switch (action.type) {
    case actionTypes.GET_TREES_BY_NAME:
      return {
        ...state,
        treesByName: action.data,
      }
    default:
      return state
  }
}

export default reducer
