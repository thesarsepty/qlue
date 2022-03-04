import { createStore } from 'redux'
import { SET_DATAS, SET_NEWDATA } from './constant/actionTypes'

const initialState = {
 datas: [],

}

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_DATAS : {
      return { ...state, datas: action.payload }

    }

    case SET_NEWDATA : {
      return { ...state, datas:[ ...state.datas, action.payload] }

    }

    default:
      return state
  }
}

const store = createStore(reducer)

export default store