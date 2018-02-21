import * as actionTypes from './actions'


const initialState = {
  honey : []
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.LOAD_HONEY_LIST:
    return {
      ...state,
      honey : action.honey
    }
  }
  return state
}


export default reducer
