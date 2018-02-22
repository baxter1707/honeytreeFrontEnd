import * as actionTypes from './actions'


const initialState = {
  honey : [],
  id : ''
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.LOAD_HONEY_LIST:
    return {
      ...state,
      honey : action.honey
    }

    case actionTypes.BUY_ITEM:
    return {
      ...state,
      id : action.key
    }
  }
  return state
}


export default reducer
