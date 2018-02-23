import * as actionTypes from './actions'


const initialState = {
  honey : [],
  id : '',
  name: '',
  price: 0,
  desc: ''
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
      id : action.key,
      name : action.name,
      price :action.price,
      desc: action.desc
    }
  }
  return state
}


export default reducer
